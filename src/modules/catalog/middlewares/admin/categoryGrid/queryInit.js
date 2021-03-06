var { select } = require('@nodejscart/mysql-query-builder');

module.exports = function (request, response) {
    let query = select("*").from("category");
    query.leftJoin("category_description").on("category.`category_id`", "=", "category_description.`category_description_category_id`");

    return query;
}