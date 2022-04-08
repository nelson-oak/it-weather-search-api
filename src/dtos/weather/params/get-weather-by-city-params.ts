import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class GetWeatherByCityParams {
  @IsNotEmpty()
  @ApiProperty({
    description: "City's name",
  })
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsIn(['c', 'k', 'f'])
  @ApiPropertyOptional({
    description: 'Degree unit',
  })
  unit?: 'c' | 'k' | 'f' = 'c';
}
