module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c87e82c8f4135dd03336188facc0397'),
  },
});
