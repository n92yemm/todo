import mongoose from 'mongoose';
import config from '../../config';

const { dbName } = config.dbConfig;
mongoose.connect(`mongodb://localhost/${dbName}`);