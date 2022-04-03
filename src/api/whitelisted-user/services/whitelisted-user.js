'use strict';

/**
 * whitelisted-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whitelisted-user.whitelisted-user');
