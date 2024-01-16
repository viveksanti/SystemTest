import { DataTypes, Model } from 'sequelize';
import * as bcrypt from 'bcrypt';
import { sequelize } from './../config/database'; // Set up Sequelize instance

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;

  public isValidPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'users',
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: (user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    }
  }
});

export { User };
