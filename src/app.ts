import express from 'express';
import carRoutes from './routes/carRoutes';
import userRoute from './routes/userRoute';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/cars', carRoutes);

app.use('/api/users', userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;


