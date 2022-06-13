import Item from "../models/Item.js";

export const addItem = async (req, res, next) => {
  const { title, amount } = req.body;

  try {
    await new Item({
      title,
      amount,
      date: `${ new Date().toDateString().slice(0,10)} ${ new Date().getFullYear()}`,
    }).save();

    res.status(201).send({
      message: "ok",
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getAllItems = async (req, res, next) => {
  try {
    const items = await Item.find({});
    const total = await Item.aggregate([
      { $match: {} },
      { $group: { _id: null, amount: { $sum: "$amount" } } },
    ]);

    const totalToday = await Item.aggregate([
      { $match: { date: `${ new Date().toDateString().slice(0,10)} ${ new Date().getFullYear()}` } },
      { $group: { _id: null, amount: { $sum: "$amount" } } },
    ]);



    res.status(201).send({
      message: "ok",
      items,
      total: total[0]?.amount,
      today: totalToday[0]?.amount,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};


export const deleteItem = async (req, res, next) => {
  const { id } = req.body;

  try {
    await Item.findByIdAndDelete(id);

    res.status(201).send({
      message: "ok",
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};