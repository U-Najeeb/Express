const getAllUsers = (req, res) => {
    res.status(200).json({
      status: 'Success',
      results: users.length,
      users,
    });
  };
  const addAUser = (req, res) => {};
  const getOneUser = (req, res) => {
    const id = req.params.id;
    console.log(users);
    const user = users.find((el) => el._id == id);
    res.status(200).json({
      status: 'Success',
      user,
    });
  };
  const updateUser = (req, res) => {};
  const deleteUser = (req, res) => {};