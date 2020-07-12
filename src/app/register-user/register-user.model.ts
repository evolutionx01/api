import * as mongoose from 'mongoose';

export const RegisterUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth_date: { type: Number, required: true },
  birth_day: { type: String, required: true },
  birth_time: { type: String, required: true },
  NRIC_new: { type: Number, required: true },
  NRIC_old: { type: Number, required: false },
  marital_status: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: Number, required: true },
  whatsapp: { type: Number, required: true },
  birth_religion: { type: String, required: true },
  current_religion: { type: String, required: true },
  mother_tongue: { type: String, required: true },
  universal_status: { type: String, required: true },
  continent: { type: String, required: true },
  descendant: { type: String, required: true },
  Education_level: { type: String, required: true },
  email: { type: String, required: true },
  fb: { type: String, required: false },
  twitter: { type: String, required: false },
  address: { type: String, required: true },
  town: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: Number, required: true },
  birth_place: { type: String, required: true },
  birth_town: { type: String, required: true },
  malay_spoken: { type: String, required: false },
  malay_reading: { type: String, required: false },
  malay_writting: { type: String, required: false },
  eng_spoken: { type: String, required: false },
  eng_reading: { type: String, required: false },
  eng_writting: { type: String, required: false },
  chinees_spoken: { type: String, required: false },
  chinees_reading: { type: String, required: false },
  chinees_writting: { type: String, required: false },
  tamil_spoken: { type: String, required: false },
  tamil_reading: { type: String, required: false },
  tamil_writting: { type: String, required: false },
  economic_type: { type: String, required: true },
  economic_Business_type: { type: String, required: false },
  income_gross: { type: Number, required: true },
  income_net: { type: Number, required: true },
  income_other: { type: Number, required: false },
  employee_position: { type: String, required: false },
  business_type: { type: String, required: false },
  monthly_expense: { type: Number, required: true },
  adequate_income: { type: Number, required: true },
  health: { type: String, required: true },
  general_knowledge: { type: String, required: true },
  financial: { type: String, required: true },
  hapiness: { type: String, required: true },
  leadership: { type: String, required: true },
  wish_economic_type: { type: String, required: true },
  wish_income_mothly: { type: String, required: true },
  wish_type_business: { type: String, required: false },
  wish_type_employment: { type: String, required: false },
  wish_aim: { type: String, required: false },
  file: { type: String, required: false },
});

export interface RegisterUser extends mongoose.Document {
  id: string;
  name: string;
  birth_date: number;
  birth_day: string;
  birth_time: string;
  NRIC_new: number;
  NRIC_old: number;
  marital_status: string;
  gender: string;
  age: number;
  mobile: number;
  whatsapp: number;
  birth_religion: string;
  current_religion: string;
  mother_tongue: string;
  universal_status: string;
  continent: string;
  descendant: string;
  Education_level: string;
  email: string;
  fb: string;
  twitter: string;
  address: string;
  town: string;
  state: string;
  postal_code: number;
  birth_place: string;
  birth_town: string;
  malay_spoken: string;
  malay_reading: string;
  malay_writting: string;
  eng_spoken: string;
  eng_reading: string;
  eng_writting: string;
  chinees_spoken: string;
  chinees_reading: string;
  chinees_writting: string;
  tamil_spoken: string;
  tamil_reading: string;
  tamil_writting: string;
  economic_type: string;
  economic_Business_type: string;
  income_gross: number;
  income_net: number;
  income_other: number;
  employee_position: string;
  business_type: string;
  monthly_expense: number;
  adequate_income: number;
  health: string;
  general_knowledge: string;
  financial: string;
  hapiness: string;
  leadership: string;
  wish_economic_type: string;
  wish_income_mothly: string;
  wish_type_business: string;
  wish_type_employment: string;
  wish_aim: string;
  file: string;
}
