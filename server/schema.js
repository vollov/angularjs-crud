db.setting.drop();
settings=[{recordsPerPage: 10, pagesPerSegment: 60, id: 1}];
db.setting.insert(settings);