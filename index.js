const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
const PORT = process.env.PORT || 5000 ;
const authRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const pCategoryRouter = require('./routes/pCategoryRoute');
const bCategoryRouter = require('./routes/bCategoryRoute');
const brandRouter = require('./routes/brandRoute');
const couponRouter = require('./routes/couponRoute');
const colorRouter = require('./routes/colorRoute');
const enquiryRouter = require('./routes/enqRoute');
const uploadRouter = require('./routes/uploadRoute');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
dbConnect();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use('/api/user', authRouter);
app.use('/api/product',productRouter);
app.use('/api/blog',blogRouter);
app.use('/api/p-category',pCategoryRouter);
app.use('/api/b-category',bCategoryRouter);
app.use('/api/brand',brandRouter);
app.use('/api/coupon',couponRouter);
app.use('/api/color',colorRouter);
app.use('/api/enquiry',enquiryRouter);
app.use('/api/upload',uploadRouter);


app.use(notFound);
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`server is running on PORT : ${PORT}`);
})