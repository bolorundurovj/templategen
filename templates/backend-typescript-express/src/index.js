import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import routes from './routes';
 % ;
if (database) {
     %  > ;
    import * as db from './config/db';
     % ;
}
 %  >
;
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 % ;
if (database) {
     %  >
    ;
    // Connect to Database
    if (process.env.NODE_ENV !== 'test') {
        db.connect();
    }
     % ;
}
 %  >
    // Routes
    app.use('/api', routes);
// Base route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to <%= projectName %> API' });
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
}
export default app;
//# sourceMappingURL=index.js.map