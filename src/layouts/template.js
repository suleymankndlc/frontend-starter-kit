module.exports = data => {
  return (
    require('./template.ejs')({
      ...data.params,
      content: require(`../pages/${data.template}.ejs`)(data)
    })
  )
}