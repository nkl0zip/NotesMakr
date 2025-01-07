exports.homepage = async (req, res) => {
  const locals = {
    title: "NotesMakr",
    description: "Easy and Efficient Notes Storing App",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.features = async (req, res) => {
  const locals = {
    title: "Features",
    description: "See it Yourself",
  };

  res.render("features", locals);
};

exports.about = async (req, res) => {
  const locals = {
    title: "About NotesMakr",
    description: "Easy and Efficient Notes Storing App",
  };

  res.render("about", locals);
};

exports.faqs = async (req, res) => {
  const locals = {
    title: "FAQs",
    description: "Know about us",
  };

  res.render("faqs", locals);
};
