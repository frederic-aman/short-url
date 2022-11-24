import { Table, Column, Model } from 'sequelize-typescript';

@Table
class Url extends Model {
  @Column
  originalUrl: string;

  @Column
  shortUrl: string;

  @Column
  nbClicks: number;
}

export { Url };
