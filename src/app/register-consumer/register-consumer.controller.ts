import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { RegisterConsumerService } from './register-consumer.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('registerconsumer')
export class RegisterConsumerController {
  constructor(
    private readonly registerConsumerService: RegisterConsumerService,
  ) {}

  @Post()
  async addProduct(
    @Body('name') consName: string,
    @Body('NRIC_no') consNRICNo: number,
    @Body('marital_status') consMaritalStatus: string,
    @Body('gender') consGender: string,
    @Body('status') consStatus: string,
    @Body('race') consRace: string,
    @Body('country') consCountry: string,
    @Body('passport_no') consPassport: string,
    @Body('mobile') consMobile: number,
    @Body('whatsapp') consWhatsapp: number,
    @Body('email') consEmail: string,
    @Body('address') consAddress: string,
    @Body('town') consTown: string,
    @Body('state') consState: string,
    @Body('postal_code') consPostalCode: number,
    @Body('preffered_communication') consPCommunication: string,
    @Body('profession') consProfession: string,
    @Body('income_net') consIncomeNet: number,
    @Body('spices') consSpice: string,
    @Body('type_of_buusiness') consTypeOfBus: string,
  ) {
    const generatedData = await this.registerConsumerService.insertUser(
      consName,
      consNRICNo,
      consMaritalStatus,
      consGender,
      consStatus,
      consRace,
      consCountry,
      consPassport,
      consMobile,
      consWhatsapp,
      consEmail,
      consAddress,
      consTown,
      consState,
      consPostalCode,
      consPCommunication,
      consProfession,
      consIncomeNet,
      consSpice,
      consTypeOfBus,
    );
    return {
      success: true,
      id: generatedData.name,
    };
  }

  @Get()
  @UseGuards(AuthGuard())
  async getAllProducts() {
    const products = await this.registerConsumerService.getUsers();
    return {
      statusCode: 200,
      success: true,
      data: products,
    };
  }

  @Get('count')
  @UseGuards(AuthGuard())
  async getAllProductsCount() {
    const products = await this.registerConsumerService.getUsers();
    return {
      statusCode: 200,
      success: true,
      count: products.length,
    };
  }

  @Get(':id')
  getProduct(@Param('id') userId: string) {
    return this.registerConsumerService.getSingleUser(userId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') userId: string,
    @Body('name') consName: string,
    @Body('NRIC_no') consNRICNo: number,
    @Body('marital_status') consMaritalStatus: string,
    @Body('gender') consGender: string,
    @Body('status') consStatus: string,
    @Body('race') consRace: string,
    @Body('country') consCountry: string,
    @Body('passport_no') consPassport: string,
    @Body('mobile') consMobile: number,
    @Body('whatsapp') consWhatsapp: number,
    @Body('email') consEmail: string,
    @Body('address') consAddress: string,
    @Body('town') consTown: string,
    @Body('state') consState: string,
    @Body('postal_code') consPostalCode: number,
    @Body('preffered_communication') consPCommunication: string,
    @Body('profession') consProfession: string,
    @Body('income_net') consIncomeNet: number,
    @Body('spices') consSpice: string,
    @Body('type_of_buusiness') consTypeOfBus: string,
  ) {
    const updatedData = await this.registerConsumerService.updateRegisteredUser(
      userId,
      consName,
      consNRICNo,
      consMaritalStatus,
      consGender,
      consStatus,
      consRace,
      consCountry,
      consPassport,
      consMobile,
      consWhatsapp,
      consEmail,
      consAddress,
      consTown,
      consState,
      consPostalCode,
      consPCommunication,
      consProfession,
      consIncomeNet,
      consSpice,
      consTypeOfBus,
    );
    return updatedData;
  }

  @Delete(':id')
  async removeProduct(@Param('id') userId: string) {
    await this.registerConsumerService.deleteProduct(userId);
    return { message: 'product deleted successfully' };
  }
}
