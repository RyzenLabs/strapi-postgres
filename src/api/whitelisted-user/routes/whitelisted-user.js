'use strict';

/**
 * whitelisted-user router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::whitelisted-user.whitelisted-user');
