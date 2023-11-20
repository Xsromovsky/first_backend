import express from 'express';
import carRoutes from './routes/carRoutes'

const app = express();
app.use(express.json());

app.use('/api/cars', carRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;


