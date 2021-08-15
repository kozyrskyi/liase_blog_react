import {Ecommerce} from '../../../../types/models/dashboards/Ecommerce';

const ecommerceDat: Ecommerce = {
  salesState: [
    {
      id: 1,
      type: 'Total Sale',
      value: '3,256',
      bgColor: '#0A8FDC',
      icon: '/images/dashboard/1_sales_icon.png',
    },
    {
      id: 2,
      type: 'Last Month Sale',
      value: '6,257',
      bgColor: '#49BD65',
      icon: '/images/dashboard/1_monthly_sales.png',
    },
    {
      id: 3,
      type: 'Total Revenue',
      value: '$34,650',
      bgColor: '#9E49E6',
      icon: '/images/dashboard/1_revenue_icon.png',
    },
    {
      id: 4,
      type: 'Total Email Sent',
      value: '11,320',
      bgColor: '#3A3849',
      icon: '/images/dashboard/1_email_sent.png',
    },
  ],
  reportCards: [
    {
      id: 1,
      type: 'This Year Sale Report',
      value: '$685K+ ',
      growth: 2.5,
      icon: '/images/dashboard/icon_revenue.png',
      strokeColor: '#0A8FDC',
      graphData: [
        {month: 'Aug', number: 310},
        {month: 'Sep', number: 130},
        {month: 'Oct', number: 350},
        {month: 'Nov', number: 170},
        {month: 'Dec', number: 400},
        {month: 'Nov', number: 170},
        {month: 'Dec', number: 400},
        {month: 'Nov', number: 170},
        {month: 'Dec', number: 400},
      ],
    },
    {
      id: 2,
      type: 'Yearly Profit',
      value: '$125K+',
      growth: -3.7,
      icon: '/images/dashboard/icon_visits.png',
      strokeColor: '#F44D50',
      graphData: [
        {month: 'Jan', number: 20},
        {month: 'Feb', number: 170},
        {month: 'Mar', number: 40},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
      ],
    },
    {
      id: 2,
      type: 'Yearly Traffic',
      value: '335K+',
      growth: 3.7,
      icon: '/images/dashboard/icon_visits.png',
      strokeColor: '#F49820',
      graphData: [
        {month: 'Jan', number: 20},
        {month: 'Feb', number: 170},
        {month: 'Mar', number: 40},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
        {month: 'Apr', number: 200},
        {month: 'May', number: 70},
      ],
    },
  ],
  popularProducts: [
    {
      id: 1,
      icon: '/images/dashboard/product_image_1.png',
      name: 'Baby Shoes',
      description: 'Reference site about.',
      price: 690,
      mrp: 800,
    },
    {
      id: 2,
      icon: '/images/dashboard/product_image_2.png',
      name: 'Baby Shoes',
      description: 'information on its origins.',
      price: 430,
      mrp: 640,
    },
    {
      id: 3,
      icon: '/images/dashboard/product_image_3.png',
      name: 'Headphones',
      description: 'information Lipsum generator.',
      price: 230,
      mrp: 550,
    },
    {
      id: 4,
      icon: '/images/dashboard/product_image_1.png',
      name: 'Headphones',
      description: 'Reference site about.',
      price: 679,
      mrp: 800,
    },
    {
      id: 5,
      icon: '/images/dashboard/product_image_2.png',
      name: 'Smart Watch',
      description: 'information on its origins.',
      price: 440,
      mrp: 640,
    },
    {
      id: 6,
      icon: '/images/dashboard/product_image_3.png',
      name: 'Smart Watch',
      description: 'information Lipsum generator.',
      price: 233,
      mrp: 550,
    },
  ],
  marketingCampaign: [
    {
      id: 1,
      name: 'Facebook Ads',
      description: '63 Likes, 387 Shares',
      icon: '/images/dashboard/facebook_icon.png',
      graph: 20,
      growth: true,
      spent: '$125',
    },
    {
      id: 2,
      name: 'Twitter Ads',
      description: '63 Likes, 387 Shares',
      icon: '/images/dashboard/twitter_icon.png',
      graph: -5,
      growth: false,
      spent: '$125',
    },
    {
      id: 3,
      name: 'Instagram',
      description: '63 Likes, 387 Shares',
      like: 'Bicycle',
      share: '08-21-2020',
      icon: '/images/dashboard/instagram_icon.png',
      graph: 20,
      growth: true,
      spent: '$125',
    },
    {
      id: 4,
      name: 'LinkedIn',
      description: '63 Likes, 387 Shares',
      like: 'Bicycle',
      share: '08-21-2020',
      icon: '/images/dashboard/linkedin_icon.png',
      graph: 25,
      growth: true,
      spent: '$125',
    },
    {
      id: 5,
      name: 'Youtube',
      description: '63 Likes, 387 Shares',
      like: 'Bicycle',
      share: '08-21-2020',
      icon: '/images/dashboard/youtube_icon.png',
      graph: 45,
      growth: true,
      spent: '$125',
    },
    {
      id: 6,
      name: 'Dribble',
      like: 'Bicycle',
      description: '63 Likes, 387 Shares',
      share: '08-21-2020',
      icon: '/images/dashboard/dribble_icon.png',
      graph: 25,
      growth: true,
      spent: '$125',
    },
  ],
  notifications: [
    {
      id: 10001,
      image: 'https://via.placeholder.com/150',
      name: 'Angelina Joew',
      type: 'NEW ORDER',
      message: 'added courses to the new bucket.',
    },
    {
      id: 10002,
      image: 'https://via.placeholder.com/150',
      name: 'John Mathew',
      type: 'SUPPORT TICKET',
      message: 'like company website design.',
    },
    {
      id: 10003,
      image: 'https://via.placeholder.com/150',
      name: 'George Bailey',
      type: 'NEW ORDER',
      message: 'followed your works',
    },
    {
      id: 10004,
      image: 'https://via.placeholder.com/150',
      name: 'Maria Lee',
      type: 'NEW ENQUIRY',
      message: 'liked origmi-creativity agency.',
    },
    {
      id: 10005,
      image: 'https://via.placeholder.com/150',
      name: 'John Mathew',
      type: 'NEW ORDER',
      message: 'like company website design.',
    },
    {
      id: 10006,
      image: 'https://via.placeholder.com/150',
      name: 'George Bailey',
      type: 'NEW ENQUIRY',
      message: 'followed your works',
    },
    {
      id: 10007,
      image: 'https://via.placeholder.com/150',
      name: 'Maria Lee',
      type: 'SUPPORT TICKET',
      message: 'liked origmi-creativity agency.',
    },
    {
      id: 10008,
      image: 'https://via.placeholder.com/150',
      name: 'John Mathew',
      type: 'NEW ORDER',
      message: 'like company website design.',
    },
    {
      id: 10009,
      image: 'https://via.placeholder.com/150',
      name: 'George Bailey',
      type: 'NEW ENQUIRY',
      message: 'followed your works',
    },
  ],
  newCustomers: [
    {
      id: 10001,
      image: 'https://via.placeholder.com/150',
      name: 'Angelina Joew',
      orders: 0,
      color: '',
      message: 'added courses to the new bucket.',
    },
    {
      id: 10002,
      image: 'https://via.placeholder.com/150',
      name: 'John Mathew',
      orders: 3,
      color: '',
      message: 'like company website design.',
    },
    {
      id: 10003,
      image: 'https://via.placeholder.com/150',
      name: 'George Bailey',
      orders: 3,
      color: '',
      message: 'followed your works',
    },
    {
      id: 10004,
      image: 'https://via.placeholder.com/150',
      name: 'Maria Lee',
      orders: 0,
      color: '',
      message: 'liked origmi-creativity agency.',
    },
    {
      id: 10005,
      image: 'https://via.placeholder.com/150',
      name: 'Angelina Joew',
      orders: 4,
      color: '',
      message: 'added courses to the new bucket.',
    },
  ],
  siteVisitors: [
    {
      id: 1,
      color: 'green',
      value: 45,
      icon: '/images/dashboard/countries_usa_icon.png',
      country: 'USA',
    },
    {
      id: 2,
      color: 'orange',
      value: 98,
      icon: '/images/dashboard/countries_france_icon.png',
      country: 'France',
    },
    {
      id: 3,
      color: 'blue',
      value: 86,
      country: 'GERMANY',
      icon: '/images/dashboard/countries_germany_icon.png',
    },
    {
      id: 4,
      color: 'red',
      value: 34,
      country: 'SPAIN',
      icon: '/images/dashboard/countries_spain_icon.png',
    },
    {
      id: 5,
      color: 'red',
      value: 34,
      country: 'INDIA',
      icon: '/images/dashboard/countries_india_icon.png',
    },
  ],
  browser: [
    {
      id: 1,
      value: '35K users',
      name: 'Firefox',
      icon: '/images/dashboard/browser_crome.png',
    },
    {
      id: 2,
      value: '39K users',
      name: 'Safari',
      icon: '/images/dashboard/browser_firefox.png',
    },
    {
      id: 3,
      value: '3.2M users',
      name: 'Google Chrome',
      icon: '/images/dashboard/browser_internet_explore.png',
    },
    {
      id: 4,
      value: '3.5M users',
      name: 'Internet Explorer',
      icon: '/images/dashboard/browser_safari.png',
    },
  ],
  recentOrders: [
    {
      id: '#SK231',
      customer: 'Ina Hughes',
      product: 'Bicycle',
      date: '08-21-2020',
      paymentType: 'COD',
      price: '$125',
      status: 'Cancelled',
    },
    {
      id: '#SK232',
      customer: 'Myrtie Ferguson',
      date: '08-12-2020',
      product: 'Addida Shoes',
      paymentType: 'Prepaid',
      price: '$100',
      status: 'Delivered',
    },
    {
      id: '#SK233',
      customer: 'Johnny Herrera',
      date: '07-30-2020',
      product: 'Sleeve Jacket',
      price: '$1,020',
      paymentType: 'Prepaid',
      status: 'Pending',
    },
    {
      id: '#SK234',
      customer: 'Myrtie Ferguson',
      date: '08-12-2020',
      product: 'Addida Shoes',
      paymentType: 'Prepaid',
      price: '$100',
      status: 'Delivered',
    },
  ],
};

export default ecommerceDat;
