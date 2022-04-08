import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetWeatherByCityParams {
  @IsNotEmpty()
  @ApiProperty({
    description: "City's name",
  })
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'Degree unit',
  })
  unit?: 'c' | 'k' | 'f' = 'c';
}
