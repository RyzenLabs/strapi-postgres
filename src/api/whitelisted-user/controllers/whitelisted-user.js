'use strict';

/**
 *  whitelisted-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::whitelisted-user.whitelisted-user');
