import categoryModel from "../model/category.model.js";

const getAllCategories = async (req, res) => {
  const categories = await categoryModel.find();

  res.send({
    message: "seccess",
    data: categories,
  });
};

export default { getAllCategories };
