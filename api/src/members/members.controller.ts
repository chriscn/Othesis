import { Controller, Get, Param } from '@nestjs/common';

@Controller('members')
export class MembersController {
    @Get()
    getRoot(): string {
        return 'Will return a list of members';
    }

    @Get("member/:id")
    getMember(@Param('id') id: string): string {
        return `You requested a member with ID ${id}`
    }
}
