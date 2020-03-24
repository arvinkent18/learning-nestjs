import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Body, 
    Param
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Cat {
        return this.catsService.findOne(param.id);
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return `Name: ${createCatDto.name} Description: ${createCatDto.description}`;
    }

    @Put(':id')
    update(@Body() updateCatDto, @Param() param): string {
        return `Update ${param.id} - Name: ${updateCatDto.name}`;
    }

    @Delete(':id')
    delete(@Param() param): string {
        return `Delete ${param.id}`;
    }
}
