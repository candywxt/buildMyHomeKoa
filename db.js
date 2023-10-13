const { Sequelize, DataTypes } = require("sequelize");

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
  host,
  port,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

// 用户数据模型
const User = sequelize.define("User", {
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  }
});

// 用户装修数据模型
const Fitment = sequelize.define("Fitment", {
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  }
});

// 用户装修数据模型
const WorkerMember = sequelize.define("WorkerMembers", {
  uid: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: '',
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '',
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '',
  },
  workerType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  practice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '',
  }
});

// 数据库初始化方法
async function init() {
  // await User.sync({ alter: true });
  // await Fitment.sync({ alter: true });
  await WorkerMember.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  User,
  Fitment,
  WorkerMember
};
