import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [
        {
            id: "1",
            name: "Oliver",
            description: "Name of my pet in Zamboanga"
        },
        {
            id: "2",
            name: "Whity",
            description: "Name of my pet in Zamboanga"
        }
    ];

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: string): Cat {
        return this.cats.find(cat => cat.id === id);
    }
}
