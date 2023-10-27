import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BusCompositionsService } from '../../Services/bus-compositions.service';
import { BusCompositionItem, IPlacesTypes } from '../../interfaces';
import { BtnConfig } from 'src/app/Shared/components/interfaces';
import { BtnTypes } from 'src/app/Shared/components/custom-btn/enums';
import { MessageService } from 'primeng/api';

type NewType = BtnConfig;

@Component({
  selector: 'app-seats-compositions',
  templateUrl: './seats-compositions.component.html',
  styleUrls: ['./seats-compositions.component.scss'],
  providers: [MessageService],
})
export class SeatsCompositionsComponent implements OnInit, OnChanges {
  @Input() busConfigration!: BusCompositionItem;
  @Output() onCancelation = new EventEmitter<string>();
  placesTypes: IPlacesTypes[] = [];
  busPlaces: IPlacesTypes[][] = [];
  selectedPlacetype!: IPlacesTypes;
  passangerSeatsCount: number = 0;
  saveBtnConfig: BtnConfig = {
    action: () => {
      this.saveBusComposition();
    },
    type: BtnTypes.Saving,
  };
  cancleBtnConfig: NewType = {
    action: () => this.hideDialog(),
    type: BtnTypes.Cancelation,
  };
  constructor(
    private busService: BusCompositionsService,
    private messageService: MessageService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.busConfigration) {
      this.drawInitGrid();
    }
  }
  ngOnInit(): void {
    this.busService.getPlacesTypes().subscribe((res) => {
      this.placesTypes = res;
    });
  }

  hideDialog() {
    this.onCancelation.emit('');
  }
  onPlaceTypeSelect(type: IPlacesTypes) {
    this.selectedPlacetype = type;
    console.log(type);
  }

  createArray2Dim() {
    const array = new Array(this.busConfigration.rowCount);
    for (let i = 0; i < this.busConfigration.rowCount; i++) {
      array[i] = new Array(this.busConfigration.columnCount);
    }
    console.log(array);
    return array;
  }

  drawInitGrid() {
    this.passangerSeatsCount = this.busConfigration.seatsCount;
    this.busPlaces = this.createArray2Dim();
    for (let row = 0; row < this.busConfigration.rowCount; row++) {
      for (
        let column = 0;
        column < this.busConfigration.columnCount;
        column++
      ) {
        this.busPlaces[row][column] = {} as IPlacesTypes;
      }
    }
    console.log('grid is drawing here ................', this.busPlaces);
  }

  onAddPlaceTypeToBusSeat(rowIndex: number, columnIndex: number) {
    if (this.selectedPlacetype) {
      if (!this.checkPassangerSeat()) return;
      this.busPlaces[rowIndex][columnIndex] = this.selectedPlacetype;
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'You Must Select place Type in the First !',
      });
    }
  }

  checkPassangerSeat() {
    if (!this.passangerSeatsCount) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Passenger Seats is finished',
      });
      return false;
    }
    if (this.selectedPlacetype.is_seat) {
      this.passangerSeatsCount--;
    }

    return true;
  }

  saveBusComposition() {
    console.log('Finish Process', this.busPlaces);
  }
}
