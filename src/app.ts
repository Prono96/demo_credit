import express from 'express';
import bodyParser from 'body-parser';
import accountRoutes from './routes/accountRoutes';
import { config } from 'dotenv'

const envPath = process.env.NODE_ENV == 'development' ? '.development.env' : '.production.env';
config({ path: envPath })


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', accountRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
