// 暴露本地IDB接口
export default {
  databaseName: 'ArkTica',
  version: 1.0,
  tables: [{
    tableName: 'diary',
    option: {
      keyPath: 'id'
    },
    indexes: [{
      key: 'id',
      option: {
        unique: true
      } // id不可重复
    },
    {
      key: 'folder'
    },
    {
      key: 'mood'
    }
    ]
  }]
}
