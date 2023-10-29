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
import { GetLevelArrPipe } from '../../Pipes/get-level-arr.pipe';

type NewType = BtnConfig;

@Component({
  selector: 'app-seats-compositions',
  templateUrl: './seats-compositions.component.html',
  styleUrls: ['./seats-compositions.component.scss'],
  providers: [MessageService, GetLevelArrPipe],
})
export class SeatsCompositionsComponent implements OnInit, OnChanges {
  @Input() busConfigration!: BusCompositionItem;
  @Output() onCancelation = new EventEmitter<string>();
  placesTypes: IPlacesTypes[] = [];
  busPlaces: IPlacesTypes[][] = [];
  selectedPlacetype!: IPlacesTypes;
  passangerSeatsCount: number = 0;
  BusLevelsPlaces = new Map();
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
  selectedLevel: number = 0;
  constructor(
    private busService: BusCompositionsService,
    private messageService: MessageService,
    private getLevelsArrPipe: GetLevelArrPipe
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.busConfigration) {
      this.passangerSeatsCount = this.isMultiLevelBus
        ? this.busConfigration.seatsCount * this.busConfigration.levelCount
        : this.busConfigration.seatsCount;

      // I need to map old busplace from previous level to new level arrays
      if (this.busConfigration.levelCount >= 2) {
        this.initMultiLevelGrid(true);
      } else {
        this.initMultiLevelGrid();
      }
    }
  }
  ngOnInit(): void {
    this.busService.getPlacesTypes().subscribe((res) => {
      this.placesTypes = res;
    });
    if (this.busConfigration) {
      this.initMultiLevelGrid();
      // I decided To reflect all Data In Map regaredless level count :) single point of checking
      // if (this.isMultiLevelBus) {
      //   this.initMultiLevelGrid();
      // } else {
      //   this.busPlaces = [...this.drawInitGrid()];
      // }
    }
  }

  hideDialog() {
    this.onCancelation.emit('');
  }
  onPlaceTypeSelect(type: IPlacesTypes) {
    this.selectedPlacetype = type;
  }

  createArray2Dim() {
    const array = new Array(this.busConfigration.rowCount);
    for (let i = 0; i < this.busConfigration.rowCount; i++) {
      array[i] = new Array(this.busConfigration.columnCount);
    }
    console.log(array);
    return array;
  }

  drawInitGrid(): IPlacesTypes[][] {
    let busPlaces = this.createArray2Dim();
    for (let row = 0; row < this.busConfigration.rowCount; row++) {
      for (
        let column = 0;
        column < this.busConfigration.columnCount;
        column++
      ) {
        busPlaces[row][column] = {} as IPlacesTypes;
      }
    }
    return busPlaces;
  }

  initMultiLevelGrid(hasPerviousLevel: boolean = false) {
    let temp = new Map();
    this.getLevelsArrPipe
      .transform(this.busConfigration.levelCount)
      .forEach((level: number) => {
        temp.set(level, this.drawInitGrid());
      });

      if (hasPerviousLevel) {
        this.UpgradBusLevels(temp);
      }else{
        this.BusLevelsPlaces=temp;
      }

      this.drawlevelBusPlaces(1);
  }

  drawlevelBusPlaces(levelNumber: number) {
    this.selectedLevel = levelNumber;
    this.busPlaces = this.BusLevelsPlaces.get(levelNumber);
  }

  onAddPlaceTypeToBusSeat(rowIndex: number, columnIndex: number) {
    if (this.selectedPlacetype) {
      if (this.selectedPlacetype.is_seat) {
        if (!this.checkPassangerSeat()) return;
      }

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
    this.passangerSeatsCount--;
    return true;
  }

  saveBusComposition() {
    console.log('Finish Process', this.BusLevelsPlaces);

    // if (this.isMultiLevelBus) {
    //   console.log('Finish Process', this.BusLevelsPlaces);
    //   return;
    // }
    // console.log('Finish Process', this.busPlaces);
  }

  UpgradBusLevels(newMap:any) {
    let perviousLevelKeys=Array.from(this.BusLevelsPlaces.keys());
    perviousLevelKeys.forEach((key)=>{
      console.log((this.BusLevelsPlaces as any).get(key))
      //TODO using any not correct here bit I use it to bypass issue
      newMap.set(key,(this.BusLevelsPlaces as any).get(key))

    })
    this.BusLevelsPlaces=newMap;
    
  }

  get isMultiLevelBus() {
    return this.busConfigration.levelCount > 1;
  }
}
