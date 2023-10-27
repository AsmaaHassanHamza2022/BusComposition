export const ValidationMessagesKeys = {
  minlength: (params: any) => ({
    en: `Minimum length is ${params.requiredLength}`,
    ar: `أقل قيمة هي ${params.requiredLength}`
  }),
  maxlength: (params: any) => ({
    en: `Maximum length is ${params.requiredLength}`,
    ar: `أكبر قيمة هي ${params.requiredLength}`
  }),
  min: (params: any) => ({
    en: `Minimum number should be ${params.min}`,
    ar: `أقل رقم يجب ان يكون ${params.min}`,
  }),
  max: (params: any) => ({
    en: `Maximum number should be ${params.max}`,
    ar: `أكبر رقم يجب ان يكون ${params.max}`
  }),
  required:()=>( {
    en: "This feild is required",
    ar: "هذا الحقل مطلوب"
  }),
  pattern: ()=>({
    en: "Please enter a valid value",
    ar: "الرجاء إدخال قيمة صالحة"
  }),
  invalidPhone:()=>( {
    en: "The mobile number is not correct",
    ar: "رقم الهاتف غير صحيح"
  }),
  whitespace:()=>({
    en: "White spaces are not allowed",
    ar: "لا يسمح بالمسافات"
  }),
  password: {
    en: "Password Must contains numbers, alphabets and special characters",
    ar: "كلمة السر يجب ان تحتوي علي ارقام وحروف وعلامات خاصة"
  },
  arabicOnly:() =>( {
    en: "Only Arabic letters allowed",
    ar: "مسموح ققط بالحروف العربية"
  }),
  englishOnly :()=>({
    en:"Only English letters allowed",
    ar:"مسموح فقط بالحروف الإنجليزية"
  }),
  requiredFile :() =>( {
    en:"This file is required",
    ar:"هذا الملف مطلوب"
  }),
  integersOnly: ()=>({
    en:"Only Integers Allowed",
    ar:"مسموح فقط بالارقام الصحيحة"
  }),
  confirmPassword:()=>({
    en: "Password does not match",
    ar: 'كلمات المرور غير متطابقة'
  })

}

export const enum validationError {
  minlength = "minlength",
  maxlength = "maxlength",
  min = "min",
  max = "max"
}


