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

import { AddBroadcastService } from './add-broadcast.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('broadcast')
export class AddBroadcastController {
  constructor(private readonly addBroadcastService: AddBroadcastService) {}

  @Post('add')
  @UseGuards(AuthGuard())
  async addMessage(
    @Body('name') bcName: string,
    @Body('message') bcMessage: string,
    @Body('file') bcFile: string,
    @Body('file_type') bcFileType: string

  ) {
    const generatedData = await this.addBroadcastService.insertMessage(
      bcName,
      bcMessage,
      bcFile,
      bcFileType
    );
    return {
      success: true,
      data: generatedData,
    };
  }

  @Get()
  async getAllMessage() {
    const messages = await this.addBroadcastService.getMessages();
    return {
      statusCode: 200,
      success: true,
      data: messages
    };
  }

  @Delete(':id')
  async removeMessage(@Param('id') broadcastId: string) {
    await this.addBroadcastService.deleteMessage(broadcastId);
    return { message: 'product deleted successfully' };
  }
  //
  // @Get('count')
  // @UseGuards(AuthGuard())
  // async getAllProductsCount() {
  //   const products = await this.registerUserService.getUsers();
  //   return {
  //     statusCode: 200,
  //     success: true,
  //     count: products.length,
  //   };
  // }
  //
  // @Get(':id')
  // getProduct(@Param('id') userId: string) {
  //   return this.registerUserService.getSingleUser(userId);
  // }
  //
  // @Patch(':id')
  // async updateProduct(
  //   @Param('id') userId: string,
  //   @Body('name') consName: string,
  //   @Body('birth_date') consBirthDate: number,
  //   @Body('birth_day') consBirthDay: string,
  //   @Body('birth_time') consBirthTime: string,
  //   @Body('NRIC_new') consNRICNew: number,
  //   @Body('NRIC_old') consNRICOld: number,
  //   @Body('marital_status') consMaritalStatus: string,
  //   @Body('gender') consGender: string,
  //   @Body('age') consAge: number,
  //   @Body('mobile') consMobile: number,
  //   @Body('whatsapp') consWhatsapp: number,
  //   @Body('birth_religion') consBirthReligion: string,
  //   @Body('current_religion') consCurrentReligion: string,
  //   @Body('mother_tongue') consMotherTongue: string,
  //   @Body('universal_status') consUniversalStatus: string,
  //   @Body('continent') consContinent: string,
  //   @Body('descendant') consDescendant: string,
  //   @Body('Education_level') consEducationLevel: string,
  //   @Body('email') consEmail: string,
  //   @Body('fb') consFb: string,
  //   @Body('twitter') consTwitter: string,
  //   @Body('address') consAddress: string,
  //   @Body('town') consTown: string,
  //   @Body('state') consState: string,
  //   @Body('postal_code') consPostalCode: number,
  //   @Body('birth_place') consBirthPlace: string,
  //   @Body('birth_town') consBirthTown: string,
  //   @Body('malay_spoken') consMalaySpoken: string,
  //   @Body('malay_reading') consMalayReading: string,
  //   @Body('malay_writting') consMalayWritting: string,
  //   @Body('eng_spoken') consEngSpoken: string,
  //   @Body('eng_reading') consEngReading: string,
  //   @Body('eng_writting') consEngWritting: string,
  //   @Body('chinees_spoken') consChineesSpoken: string,
  //   @Body('chinees_reading') consChineesReading: string,
  //   @Body('chinees_writting') consChineesWritting: string,
  //   @Body('tamil_spoken') consTamilSpoken: string,
  //   @Body('tamil_reading') consTamilReading: string,
  //   @Body('tamil_writting') consTamilWritting: string,
  //   @Body('economic_type') consEconomicType: string,
  //   @Body('economic_Business_type') consEconomicBusinessType: string,
  //   @Body('income_gross') consIncomeGross: number,
  //   @Body('income_net') consIncomeNet: number,
  //   @Body('income_other') consIncomeOther: number,
  //   @Body('employee_position') consEmployeePosition: string,
  //   @Body('business_type') consBusinessType: string,
  //   @Body('monthly_expense') consMonthlyExpense: number,
  //   @Body('adequate_income') consAdequateIncome: number,
  //   @Body('health') consHealth: string,
  //   @Body('general_knowledge') consGeneralKnowledge: string,
  //   @Body('financial') consFinancial: string,
  //   @Body('hapiness') consHapiness: string,
  //   @Body('leadership') consLeadership: string,
  //   @Body('wish_economic_type') consWishEconomicType: string,
  //   @Body('wish_income_mothly') consWishIncomeMothly: string,
  //   @Body('wish_type_business') consWishTypeBusiness: string,
  //   @Body('wish_type_employment') consWishTypeEmployment: string,
  //   @Body('wish_aim') consWishAim: string,
  // ) {
  //   const updatedData = await this.registerUserService.updateRegisteredUser(
  //     userId,
  //     consName,
  //     consBirthDate,
  //     consBirthDay,
  //     consBirthTime,
  //     consNRICNew,
  //     consNRICOld,
  //     consMaritalStatus,
  //     consGender,
  //     consAge,
  //     consMobile,
  //     consWhatsapp,
  //     consBirthReligion,
  //     consCurrentReligion,
  //     consMotherTongue,
  //     consUniversalStatus,
  //     consContinent,
  //     consDescendant,
  //     consEducationLevel,
  //     consEmail,
  //     consFb,
  //     consTwitter,
  //     consAddress,
  //     consTown,
  //     consState,
  //     consPostalCode,
  //     consBirthPlace,
  //     consBirthTown,
  //     consMalaySpoken,
  //     consMalayReading,
  //     consMalayWritting,
  //     consEngSpoken,
  //     consEngReading,
  //     consEngWritting,
  //     consChineesSpoken,
  //     consChineesReading,
  //     consChineesWritting,
  //     consTamilSpoken,
  //     consTamilReading,
  //     consTamilWritting,
  //     consEconomicType,
  //     consEconomicBusinessType,
  //     consIncomeGross,
  //     consIncomeNet,
  //     consIncomeOther,
  //     consEmployeePosition,
  //     consBusinessType,
  //     consMonthlyExpense,
  //     consAdequateIncome,
  //     consHealth,
  //     consGeneralKnowledge,
  //     consFinancial,
  //     consHapiness,
  //     consLeadership,
  //     consWishEconomicType,
  //     consWishIncomeMothly,
  //     consWishTypeBusiness,
  //     consWishTypeEmployment,
  //     consWishAim,
  //   );
  //   return updatedData;
  // }
  //

}
