import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RegisterUser } from './register-user.model';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectModel('RegisterUser')
    private readonly userModel: Model<RegisterUser>,
  ) {}

  async insertUser(
    name: string,
    birth_date: number,
    birth_day: string,
    birth_time: string,
    NRIC_new: number,
    NRIC_old: number,
    marital_status: string,
    gender: string,
    age: number,
    mobile: number,
    whatsapp: number,
    birth_religion: string,
    current_religion: string,
    mother_tongue: string,
    universal_status: string,
    continent: string,
    descendant: string,
    Education_level: string,
    email: string,
    fb: string,
    twitter: string,
    address: string,
    town: string,
    state: string,
    postal_code: number,
    birth_place: string,
    birth_town: string,
    malay_spoken: string,
    malay_reading: string,
    malay_writting: string,
    eng_spoken: string,
    eng_reading: string,
    eng_writting: string,
    chinees_spoken: string,
    chinees_reading: string,
    chinees_writting: string,
    tamil_spoken: string,
    tamil_reading: string,
    tamil_writting: string,
    economic_type: string,
    economic_Business_type: string,
    income_gross: number,
    income_net: number,
    income_other: number,
    employee_position: string,
    business_type: string,
    monthly_expense: number,
    adequate_income: number,
    health: string,
    general_knowledge: string,
    financial: string,
    hapiness: string,
    leadership: string,
    wish_economic_type: string,
    wish_income_mothly: string,
    wish_type_business: string,
    wish_type_employment: string,
    wish_aim: string,
    file: string,
  ) {
    const newUser = new this.userModel({
      name,
      birth_date,
      birth_day,
      birth_time,
      NRIC_new,
      NRIC_old,
      marital_status,
      gender,
      age,
      mobile,
      whatsapp,
      birth_religion,
      current_religion,
      mother_tongue,
      universal_status,
      continent,
      descendant,
      Education_level,
      email,
      fb,
      twitter,
      address,
      town,
      state,
      postal_code,
      birth_place,
      birth_town,
      malay_spoken,
      malay_reading,
      malay_writting,
      eng_spoken,
      eng_reading,
      eng_writting,
      chinees_spoken,
      chinees_reading,
      chinees_writting,
      tamil_spoken,
      tamil_reading,
      tamil_writting,
      economic_type,
      economic_Business_type,
      income_gross,
      income_net,
      income_other,
      employee_position,
      business_type,
      monthly_expense,
      adequate_income,
      health,
      general_knowledge,
      financial,
      hapiness,
      leadership,
      wish_economic_type,
      wish_income_mothly,
      wish_type_business,
      wish_type_employment,
      wish_aim,
      file,
    });
    const result = await newUser.save();
    return result;
  }

  async getUsers() {
    const registerUsers = await this.userModel.find().exec();
    return registerUsers.map(rdUser => ({
      id: rdUser.id,
      name: rdUser.name,
      birth_date: rdUser.birth_date,
      birth_day: rdUser.birth_day,
      birth_time: rdUser.birth_time,
      NRIC_new: rdUser.NRIC_new,
      NRIC_old: rdUser.NRIC_old,
      marital_status: rdUser.marital_status,
      gender: rdUser.gender,
      age: rdUser.age,
      mobile: rdUser.mobile,
      whatsapp: rdUser.whatsapp,
      birth_religion: rdUser.birth_religion,
      current_religion: rdUser.current_religion,
      mother_tongue: rdUser.mother_tongue,
      universal_status: rdUser.universal_status,
      continent: rdUser.continent,
      descendant: rdUser.descendant,
      Education_level: rdUser.Education_level,
      email: rdUser.email,
      fb: rdUser.fb,
      twitter: rdUser.twitter,
      address: rdUser.address,
      town: rdUser.town,
      state: rdUser.state,
      postal_code: rdUser.postal_code,
      birth_place: rdUser.birth_place,
      birth_town: rdUser.birth_town,
      malay_spoken: rdUser.malay_spoken,
      malay_reading: rdUser.malay_reading,
      malay_writting: rdUser.malay_writting,
      eng_spoken: rdUser.eng_spoken,
      eng_reading: rdUser.eng_reading,
      eng_writting: rdUser.eng_writting,
      chinees_spoken: rdUser.chinees_spoken,
      chinees_reading: rdUser.chinees_reading,
      chinees_writting: rdUser.chinees_writting,
      tamil_spoken: rdUser.tamil_spoken,
      tamil_reading: rdUser.tamil_reading,
      tamil_writting: rdUser.tamil_writting,
      economic_type: rdUser.economic_type,
      economic_Business_type: rdUser.economic_Business_type,
      income_gross: rdUser.income_gross,
      income_net: rdUser.income_net,
      income_other: rdUser.income_other,
      employee_position: rdUser.employee_position,
      business_type: rdUser.business_type,
      monthly_expense: rdUser.monthly_expense,
      adequate_income: rdUser.adequate_income,
      health: rdUser.health,
      general_knowledge: rdUser.general_knowledge,
      financial: rdUser.financial,
      hapiness: rdUser.hapiness,
      leadership: rdUser.leadership,
      wish_economic_type: rdUser.wish_economic_type,
      wish_income_mothly: rdUser.wish_income_mothly,
      wish_type_business: rdUser.wish_type_business,
      wish_type_employment: rdUser.wish_type_employment,
      wish_aim: rdUser.wish_aim,
    }));
  }

  async getSingleUser(registeredUserId: string) {
    const registeredUser = await this.findRegiseredUser(registeredUserId);
    return {
      id: registeredUser.id,
      name: registeredUser.name,
      birth_date: registeredUser.birth_date,
      birth_day: registeredUser.birth_day,
      birth_time: registeredUser.birth_time,
      NRIC_new: registeredUser.NRIC_new,
      NRIC_old: registeredUser.NRIC_old,
      marital_status: registeredUser.marital_status,
      gender: registeredUser.gender,
      age: registeredUser.age,
      mobile: registeredUser.mobile,
      whatsapp: registeredUser.whatsapp,
      birth_religion: registeredUser.birth_religion,
      current_religion: registeredUser.current_religion,
      mother_tongue: registeredUser.mother_tongue,
      universal_status: registeredUser.universal_status,
      continent: registeredUser.continent,
      descendant: registeredUser.descendant,
      Education_level: registeredUser.Education_level,
      email: registeredUser.email,
      fb: registeredUser.fb,
      twitter: registeredUser.twitter,
      address: registeredUser.address,
      town: registeredUser.town,
      state: registeredUser.state,
      postal_code: registeredUser.postal_code,
      birth_place: registeredUser.birth_place,
      birth_town: registeredUser.birth_town,
      malay_spoken: registeredUser.malay_spoken,
      malay_reading: registeredUser.malay_reading,
      malay_writting: registeredUser.malay_writting,
      eng_spoken: registeredUser.eng_spoken,
      eng_reading: registeredUser.eng_reading,
      eng_writting: registeredUser.eng_writting,
      chinees_spoken: registeredUser.chinees_spoken,
      chinees_reading: registeredUser.chinees_reading,
      chinees_writting: registeredUser.chinees_writting,
      tamil_spoken: registeredUser.tamil_spoken,
      tamil_reading: registeredUser.tamil_reading,
      tamil_writting: registeredUser.tamil_writting,
      economic_type: registeredUser.economic_type,
      economic_Business_type: registeredUser.economic_Business_type,
      income_gross: registeredUser.income_gross,
      income_net: registeredUser.income_net,
      income_other: registeredUser.income_other,
      employee_position: registeredUser.employee_position,
      business_type: registeredUser.business_type,
      monthly_expense: registeredUser.monthly_expense,
      adequate_income: registeredUser.adequate_income,
      health: registeredUser.health,
      general_knowledge: registeredUser.general_knowledge,
      financial: registeredUser.financial,
      hapiness: registeredUser.hapiness,
      leadership: registeredUser.leadership,
      wish_economic_type: registeredUser.wish_economic_type,
      wish_income_mothly: registeredUser.wish_income_mothly,
      wish_type_business: registeredUser.wish_type_business,
      wish_type_employment: registeredUser.wish_type_employment,
      wish_aim: registeredUser.wish_aim,
    };
  }

  async updateRegisteredUser(
    registeredUserId: string,
    name: string,
    birth_date: number,
    birth_day: string,
    birth_time: string,
    NRIC_new: number,
    NRIC_old: number,
    marital_status: string,
    gender: string,
    age: number,
    mobile: number,
    whatsapp: number,
    birth_religion: string,
    current_religion: string,
    mother_tongue: string,
    universal_status: string,
    continent: string,
    descendant: string,
    Education_level: string,
    email: string,
    fb: string,
    twitter: string,
    address: string,
    town: string,
    state: string,
    postal_code: number,
    birth_place: string,
    birth_town: string,
    malay_spoken: string,
    malay_reading: string,
    malay_writting: string,
    eng_spoken: string,
    eng_reading: string,
    eng_writting: string,
    chinees_spoken: string,
    chinees_reading: string,
    chinees_writting: string,
    tamil_spoken: string,
    tamil_reading: string,
    tamil_writting: string,
    economic_type: string,
    economic_Business_type: string,
    income_gross: number,
    income_net: number,
    income_other: number,
    employee_position: string,
    business_type: string,
    monthly_expense: number,
    adequate_income: number,
    health: string,
    general_knowledge: string,
    financial: string,
    hapiness: string,
    leadership: string,
    wish_economic_type: string,
    wish_income_mothly: string,
    wish_type_business: string,
    wish_type_employment: string,
    wish_aim: string,
  ) {
    const updatedRegisteredUser = await this.findRegiseredUser(
      registeredUserId,
    );

    if (name) {
      updatedRegisteredUser.name = name;
    }
    if (birth_date) {
      updatedRegisteredUser.birth_date = birth_date;
    }
    if (birth_day) {
      updatedRegisteredUser.birth_day = birth_day;
    }
    if (birth_time) {
      updatedRegisteredUser.birth_time = birth_time;
    }
    if (NRIC_new) {
      updatedRegisteredUser.NRIC_new = NRIC_new;
    }
    if (NRIC_old) {
      updatedRegisteredUser.NRIC_old = NRIC_old;
    }
    if (marital_status) {
      updatedRegisteredUser.marital_status = marital_status;
    }
    if (gender) {
      updatedRegisteredUser.gender = gender;
    }
    if (age) {
      updatedRegisteredUser.age = age;
    }
    if (mobile) {
      updatedRegisteredUser.mobile = mobile;
    }
    if (whatsapp) {
      updatedRegisteredUser.whatsapp = whatsapp;
    }
    if (birth_religion) {
      updatedRegisteredUser.birth_religion = birth_religion;
    }
    if (current_religion) {
      updatedRegisteredUser.current_religion = current_religion;
    }
    if (mother_tongue) {
      updatedRegisteredUser.mother_tongue = mother_tongue;
    }
    if (universal_status) {
      updatedRegisteredUser.universal_status = universal_status;
    }
    if (continent) {
      updatedRegisteredUser.continent = continent;
    }
    if (descendant) {
      updatedRegisteredUser.descendant = descendant;
    }
    if (Education_level) {
      updatedRegisteredUser.Education_level = Education_level;
    }
    if (email) {
      updatedRegisteredUser.email = email;
    }
    if (fb) {
      updatedRegisteredUser.fb = fb;
    }
    if (twitter) {
      updatedRegisteredUser.twitter = twitter;
    }
    if (address) {
      updatedRegisteredUser.address = address;
    }
    if (town) {
      updatedRegisteredUser.town = town;
    }
    if (state) {
      updatedRegisteredUser.state = state;
    }
    if (postal_code) {
      updatedRegisteredUser.postal_code = postal_code;
    }
    if (birth_place) {
      updatedRegisteredUser.birth_place = birth_place;
    }
    if (birth_town) {
      updatedRegisteredUser.birth_town = birth_town;
    }
    if (malay_spoken) {
      updatedRegisteredUser.malay_spoken = malay_spoken;
    }
    if (malay_reading) {
      updatedRegisteredUser.malay_reading = malay_reading;
    }
    if (malay_writting) {
      updatedRegisteredUser.malay_writting = malay_writting;
    }
    if (eng_spoken) {
      updatedRegisteredUser.eng_spoken = eng_spoken;
    }
    if (eng_reading) {
      updatedRegisteredUser.eng_reading = eng_reading;
    }
    if (eng_writting) {
      updatedRegisteredUser.eng_writting = eng_writting;
    }
    if (chinees_spoken) {
      updatedRegisteredUser.chinees_spoken = chinees_spoken;
    }
    if (chinees_reading) {
      updatedRegisteredUser.chinees_reading = chinees_reading;
    }
    if (chinees_writting) {
      updatedRegisteredUser.chinees_writting = chinees_writting;
    }
    if (tamil_spoken) {
      updatedRegisteredUser.tamil_spoken = tamil_spoken;
    }
    if (tamil_reading) {
      updatedRegisteredUser.tamil_reading = tamil_reading;
    }
    if (tamil_writting) {
      updatedRegisteredUser.tamil_writting = tamil_writting;
    }
    if (economic_type) {
      updatedRegisteredUser.economic_type = economic_type;
    }
    if (economic_Business_type) {
      updatedRegisteredUser.economic_Business_type = economic_Business_type;
    }
    if (income_gross) {
      updatedRegisteredUser.income_gross = income_gross;
    }
    if (income_net) {
      updatedRegisteredUser.income_net = income_net;
    }
    if (income_other) {
      updatedRegisteredUser.income_other = income_other;
    }
    if (employee_position) {
      updatedRegisteredUser.employee_position = employee_position;
    }
    if (business_type) {
      updatedRegisteredUser.business_type = business_type;
    }
    if (monthly_expense) {
      updatedRegisteredUser.monthly_expense = monthly_expense;
    }
    if (adequate_income) {
      updatedRegisteredUser.adequate_income = adequate_income;
    }
    if (health) {
      updatedRegisteredUser.health = health;
    }
    if (general_knowledge) {
      updatedRegisteredUser.general_knowledge = general_knowledge;
    }
    if (financial) {
      updatedRegisteredUser.financial = financial;
    }
    if (hapiness) {
      updatedRegisteredUser.hapiness = hapiness;
    }
    if (leadership) {
      updatedRegisteredUser.leadership = leadership;
    }
    if (wish_economic_type) {
      updatedRegisteredUser.wish_economic_type = wish_economic_type;
    }
    if (wish_income_mothly) {
      updatedRegisteredUser.wish_income_mothly = wish_income_mothly;
    }
    if (wish_type_business) {
      updatedRegisteredUser.wish_type_business = wish_type_business;
    }
    if (wish_type_employment) {
      updatedRegisteredUser.wish_type_employment = wish_type_employment;
    }
    if (wish_aim) {
      updatedRegisteredUser.wish_aim = wish_aim;
    }
    await new this.userModel(updatedRegisteredUser).save();
    return updatedRegisteredUser;
  }

  async deleteProduct(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }

  private async findRegiseredUser(id: string): Promise<RegisterUser> {
    let rUser;
    try {
      rUser = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!rUser) {
      throw new NotFoundException('Could not find user.');
    }
    return rUser;
  }
}
