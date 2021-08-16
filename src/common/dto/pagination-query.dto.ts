// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // Set configuration on main.ts
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // Set configuration on main.ts
  offset: number;
}
