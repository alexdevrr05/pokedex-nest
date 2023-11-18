import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

// NOTE: colocar "?" es para que TS sepa que son opcionales

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;
}
