import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RegisterConsumer } from './register-consumer.model';

@Injectable()
export class RegisterConsumerService {
  constructor(
    @InjectModel('RegisterConsumer')
    private readonly userModel: Model<RegisterConsumer>,
  ) {}

  async insertUser(
    name: string,
    NRIC_no: number,
    marital_status: string,
    gender: string,
    status: string,
    race: string,
    country: string,
    passport_no: string,
    mobile: number,
    whatsapp: number,
    email: string,
    address: string,
    town: string,
    state: string,
    postal_code: number,
    preffered_communication: string,
    profession: string,
    income_net: number,
    spices: string,
    type_of_buusiness: string,
  ) {
    const newUser = new this.userModel({
      name,
      NRIC_no,
      marital_status,
      gender,
      status,
      race,
      country,
      passport_no,
      mobile,
      whatsapp,
      email,
      address,
      town,
      state,
      postal_code,
      preffered_communication,
      profession,
      income_net,
      spices,
      type_of_buusiness,
    });
    const result = await newUser.save();
    return result;
  }

  async getUsers() {
    const registerUsers = await this.userModel.find().exec();
    return registerUsers.map(rdUser => ({
      id: rdUser.id,
      name: rdUser.name,
      NRIC_no: rdUser.NRIC_no,
      marital_status: rdUser.marital_status,
      gender: rdUser.gender,
      status: rdUser.status,
      race: rdUser.race,
      country: rdUser.country,
      passport_no: rdUser.passport_no,
      mobile: rdUser.mobile,
      whatsapp: rdUser.whatsapp,
      email: rdUser.email,
      address: rdUser.address,
      town: rdUser.town,
      state: rdUser.state,
      postal_code: rdUser.postal_code,
      preffered_communication: rdUser.preffered_communication,
      profession: rdUser.profession,
      income_net: rdUser.income_net,
      spices: rdUser.spices,
      type_of_buusiness: rdUser.type_of_buusiness,
    }));
  }

  async getSingleUser(registeredUserId: string) {
    const registeredUser = await this.findRegiseredUser(registeredUserId);
    return {
      id: registeredUser.id,
      name: registeredUser.name,
      NRIC_no: registeredUser.NRIC_no,
      marital_status: registeredUser.marital_status,
      gender: registeredUser.gender,
      status: registeredUser.status,
      race: registeredUser.race,
      country: registeredUser.country,
      passport_no: registeredUser.passport_no,
      mobile: registeredUser.mobile,
      whatsapp: registeredUser.whatsapp,
      email: registeredUser.email,
      address: registeredUser.address,
      town: registeredUser.town,
      state: registeredUser.state,
      postal_code: registeredUser.postal_code,
      preffered_communication: registeredUser.preffered_communication,
      profession: registeredUser.profession,
      income_net: registeredUser.income_net,
      spices: registeredUser.spices,
      type_of_buusiness: registeredUser.type_of_buusiness,
    };
  }

  async updateRegisteredUser(
    registeredUserId: string,
    name: string,
    NRIC_no: number,
    marital_status: string,
    gender: string,
    status: string,
    race: string,
    country: string,
    passport_no: string,
    mobile: number,
    whatsapp: number,
    email: string,
    address: string,
    town: string,
    state: string,
    postal_code: number,
    preffered_communication: string,
    profession: string,
    income_net: number,
    spices: string,
    type_of_buusiness: string,
  ) {
    const updatedRegisteredUser = await this.findRegiseredUser(
      registeredUserId,
    );

    if (name) {
      updatedRegisteredUser.name = name;
    }
    if (NRIC_no) {
      updatedRegisteredUser.NRIC_no = NRIC_no;
    }
    if (marital_status) {
      updatedRegisteredUser.marital_status = marital_status;
    }
    if (gender) {
      updatedRegisteredUser.gender = gender;
    }
    if (status) {
      updatedRegisteredUser.status = status;
    }
    if (race) {
      updatedRegisteredUser.race = race;
    }
    if (country) {
      updatedRegisteredUser.country = country;
    }
    if (passport_no) {
      updatedRegisteredUser.passport_no = passport_no;
    }
    if (mobile) {
      updatedRegisteredUser.mobile = mobile;
    }
    if (whatsapp) {
      updatedRegisteredUser.whatsapp = whatsapp;
    }
    if (email) {
      updatedRegisteredUser.email = email;
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
    if (preffered_communication) {
      updatedRegisteredUser.preffered_communication = preffered_communication;
    }
    if (profession) {
      updatedRegisteredUser.profession = profession;
    }
    if (income_net) {
      updatedRegisteredUser.income_net = income_net;
    }
    if (spices) {
      updatedRegisteredUser.spices = spices;
    }
    if (type_of_buusiness) {
      updatedRegisteredUser.type_of_buusiness = type_of_buusiness;
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

  private async findRegiseredUser(id: string): Promise<RegisterConsumer> {
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
