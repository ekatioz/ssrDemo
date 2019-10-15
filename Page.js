module.exports = (model) => {
  // eslint-disable-next-line no-return-assign , no-param-reassign
  const body = model.body.reduce((collector, element) => collector += element, '');
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${model.title}</title>
        <link rel="stylesheet" href="/public/styles.css">
    </head>
    <body>
        ${body}
    </body>
    </html>
    `;
};
