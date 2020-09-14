import { Get, Post, JsonController, QueryParam, Body, Ctx} from 'routing-controllers'
import { getRepository } from 'typeorm'
// import Environment from 'configs/environments'
const formidable = require("formidable");

import { Record } from '../entities/record.entity';
import { Context } from 'koa';

@JsonController()
export class RecordController {
  constructor() { }

  @Post('/record/create')
  async create(@QueryParam('uuid') uuid: string, @Body() events: any, @Ctx() context: Context): Promise<any> {
    const record = new Record()
    console.log(record);
    record.id = null
    record.uuid = uuid
    record.events = events.events
    const recordRepo = getRepository(Record)
    await recordRepo.save({uuid, events: events.events, id: null})
    return {
      uuid,
      events
    }
  }
}
