"use strict";

const pool = require("../DBconnection");
const catchAsyncFunction = require("../middlewares/catchAsyncFun");
const fs = require("fs");
const s3 = require("../utils/s3Service");

// add attribute
exports.addAttribute = catchAsyncFunction(async (req, res) => {
  const existRole = await pool.query(
    "select * from attributes where name = $1",
    [req.body.title]
  );
  // console.log(existRole.rows[0].title);
  if (existRole.rows[0]) {
    res.json({
      success: false,
      message: "this title is already exist",
    });
  } else {
    console.log(req.body.title);
    const user = await pool.query(
      "INSERT INTO attributes (name) VALUES ($1) RETURNING *  ",
      [req.body.title]
    );
    res.json({
      success: true,
      message: "attribute added successfully!",
    });
  }
});

// get attributes
exports.getAttributes = catchAsyncFunction(async (req, res) => {
  const user = await pool.query("select * from attributes");

  res.json({
    success: true,
    attributes: user.rows,
    message: "attributes  fetched successfully!",
  });
});

exports.addPackage = catchAsyncFunction(async (req, res) => {
  try {
    let imagePaths = [];

    if (req.files && req.files.image) {
      if (Array.isArray(req.files.image) && req.files.image.length > 0) {
        for (let image of req.files.image) {
          try {
            const s3Url = await s3.uploadToS3(image, "images");
            imagePaths.push(s3Url);
          } catch (error) {
            console.error("Error uploading image to S3:", error);
            return res.status(500).json({
              success: false,
              message: "Error uploading image to S3",
            });
          }
        }
      }
    }

    const user = await pool.query(
      "INSERT INTO packages (title, details, price, added_by, added_for, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        req.body.title,
        req.body.details,
        req.body.price,
        req.body.added_by,
        req.body.added_for,
        imagePaths[0],
      ]
    );
    for (const element of req.body.attributes) {
      // Parse the JSON string into a JavaScript object
      const dataObject = JSON.parse(element);

      // Access individual values using keys
      const attribute_id = dataObject.attribute_id;
      const value = dataObject.value;
      const attributeTitle = dataObject.attributeTitle;
          try {
              const user2 = await pool.query(
                  'INSERT INTO package_attribute (attribute_id, package_id, des_pkg) VALUES ($1, $2, $3) RETURNING *',
                  [attribute_id, user.rows[0].id, value]
              );
          } catch (error) {
              console.error('Error inserting attribute into database:', error);
              // Handle the error, you can choose to return an error response if needed
          }
    }

    res.json({
      success: true,
      message: "Package added successfully!",
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

//  get  packages
exports.getPackages = catchAsyncFunction(async (req, res) => {
  var page = 0;
  const pageSize = 20;

  // Count total number of packages
  const length = await pool.query("SELECT COUNT(*) FROM packages");
  const totalPackages = parseInt(length.rows[0].count);
  var pagelength = Math.ceil(totalPackages / pageSize);

  var previousPage;
  var currentPage;
  var nextPage;

  if (!req.query.page) {
    page = 0;
    currentPage = process.env.apiUrl + "/packages/get-packages?page=1";
    nextPage =
      pagelength > 1
        ? process.env.apiUrl + "/packages/get-packages?page=2"
        : null;
  } else {
    page = req.query.page - 1;
    if (page === 0) {
      previousPage = null;
      currentPage = process.env.apiUrl + "/packages/get-packages?page=1";
      nextPage =
        pagelength > 1
          ? process.env.apiUrl + "/packages/get-packages?page=2"
          : null;
    } else if (page === pagelength - 1) {
      previousPage = process.env.apiUrl + "/packages/get-packages?page=" + page;
      currentPage =
        process.env.apiUrl + "/packages/get-packages?page=" + (page + 1);
    } else {
      previousPage = process.env.apiUrl + "/packages/get-packages?page=" + page;
      currentPage =
        process.env.apiUrl + "/packages/get-packages?page=" + (page + 1);
      nextPage =
        process.env.apiUrl + "/packages/get-packages?page=" + (page + 2);
    }
  }

  // Retrieve packages in descending order with pagination
  const user = await pool.query(
    "SELECT * FROM packages ORDER BY id DESC LIMIT $1 OFFSET $2",
    [pageSize, page * pageSize]
  );

  res.json({
    success: true,
    packages: user.rows,
    page: {
      totalPages: pagelength,
      previousPage: previousPage,
      currentPage: currentPage,
      nextPage: nextPage,
    },
    message: "Packages fetched successfully!",
  });
});

//  get  package details
exports.getPackageDetails = catchAsyncFunction(async (req, res) => {
  const user = await pool.query("select * from packages where id= $1", [
    req.body.package_id,
  ]);
  const attributes = await pool.query(
    "select attributes.name,attributes.id attributeId,package_attribute.id, package_attribute.des_pkg as value  from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1",
    [req.body.package_id]
  );

  res.json({
    success: true,
    packages: user.rows,
    attributes: attributes.rows,
    message: "package fetched successfully!",
  });
});

//  get  packages from attribute name
exports.getPackagesFromAttribute = catchAsyncFunction(async (req, res) => {
  const user = await pool.query(
    "select packages.* from package_attribute join attributes on package_attribute.attribute_id = attributes.id join packages on package_attribute.package_id = packages.id where attributes.name LIKE $1 ",
    [req.body.attribute]
  );

  res.json({
    success: true,
    packages: user.rows,
    message: "package fetched successfully!",
  });
});

//  get  packages from attribute id
exports.getPackagesFromAttributeId = catchAsyncFunction(async (req, res) => {
  const user = [];
  var max = req.body.attribute_id.length;
  // console.log(max);
  for (let j = 0; j < max; j++) {
    const user1 = await pool.query(
      "select packages.* from package_attribute join attributes on package_attribute.attribute_id = attributes.id join packages on package_attribute.package_id = packages.id where attributes.id = $1 ",
      [req.body.attribute_id[j]["attribute_id"]]
    );
    console.log(user1.rows);
    user[j] = user1.rows;
  }

  res.json({
    success: true,
    packages: user,
    message: "package fetched successfully!",
  });
});

//  add  packages for compare
exports.addPackagesToCompare = catchAsyncFunction(async (req, res) => {
  const user = await pool.query(
    "INSERT INTO compare_packages (user_id,package_id) VALUES ($1,$2) RETURNING *  ",
    [req.body.user_id, req.body.package_id]
  );

  res.json({
    success: true,
    packages: user.rows,
    message: "package added to compare successfully!",
  });
});

//  get  packages for compare
exports.getCompareItems = catchAsyncFunction(async (req, res) => {
  const user = [];
  var max = req.body.package_id.length;
  for (let j = 0; j < max; j++) {
    const user1 = await pool.query(
      "select packages.* from  packages where id =$1",
      [req.body.package_id[j]]
    );
    user[j] = user1.rows;
  }
  for (let i = 0; i < user.length; i++) {
    const dataattr = await pool.query(
      "select attributes.name,attributes.id,package_attribute.des_pkg as value from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1",
      [user[i][0].id]
    );
    // console.log(dataattr.rows);
    user[i][0]["attributes"] = dataattr.rows;
    // console.log(user[i]['attributes']);
  }

  res.json({
    success: true,
    packages: user,
    message: "packages for  compare !",
  });
});

//  add  custom page
exports.addCustomPage = catchAsyncFunction(async (req, res) => {
  const user = await pool.query(
    "INSERT INTO custom_pages (title,details,status) VALUES ($1,$2,$3)",
    [req.body.title, req.body.details, true]
  );

  res.json({
    success: true,
    message: "custom page added successfully!",
  });
});

//  get  custom page
exports.getCustomPage = catchAsyncFunction(async (req, res) => {
  const user = await pool.query("select * from  custom_pages");

  res.json({
    success: true,
    packages: user.rows,
    message: "custom page fetched successfully!",
  });
});

//  get  feature packages
exports.getCustomPage = catchAsyncFunction(async (req, res) => {
  const user = await pool.query("select * from  feature_packages");

  res.json({
    success: true,
    packages: user.rows,
    message: "feature packages fetched successfully!",
  });
});

//  add  packages for make it feature packages
exports.addPackagesTofeature = catchAsyncFunction(async (req, res) => {
  const user = await pool.query(
    "INSERT INTO feature_packages (user_id,package_id) VALUES ($1,$2) RETURNING *  ",
    [req.body.user_id, req.body.package_id]
  );

  res.json({
    success: true,
    packages: user.rows,
    message: "package added to feature list successfully!",
  });
});

//  get feature packages
exports.getFeaturePackages = catchAsyncFunction(async (req, res) => {
  const package_ids = await pool.query(
    "select package_id from  feature_packages where user_id =$1",
    [req.body.user_id]
  );
  console.log(package_ids.rows);
  const user = [];
  var max = package_ids.rows.length;
  for (let j = 0; j < max; j++) {
    const user1 = await pool.query(
      "select packages.* from  packages where id =$1",
      [package_ids.rows[j]["package_id"]]
    );
    user[j] = user1.rows;
  }
  for (let i = 0; i < user.length; i++) {
    const dataattr = await pool.query(
      "select attributes.name,attributes.id from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1",
      [user[i][0].id]
    );
    // console.log(dataattr.rows);
    user[i][0]["attributes"] = dataattr.rows;
    // console.log(user[i]['attributes']);
  }

  res.json({
    success: true,
    packages: user,
    message: "Feature Packages !",
  });
});

//get package for search items
exports.getPackageForSearch = catchAsyncFunction(async (req, res) => {
  const pkg = await pool.query("select * from packages");
var data=pkg.rows
var resvesedata=data.reverse();

  res.json({
    success: true,
    packages: resvesedata,
    message: "package fetched successfully!",
  });
});

exports.getCurrentUserPackages = catchAsyncFunction(async (req, res) => {
  const currentUser = await pool.query(
    "select * from packages where added_by = $1",
    [req.body.currentUserId]
  );

  res.json({
    success: true,
    packages: currentUser.rows,
    message: "package fetched successfully!",
  });
});

exports.deletePackage = catchAsyncFunction(async (req, res) => {
  const packageId = req.params.id;

  // Delete the record from the package_attribute   table
  const deletePackageAttributeQuery =
    "DELETE FROM package_attribute WHERE package_id = $1";

  pool.query(deletePackageAttributeQuery, [packageId], (err, result) => {
    if (err) {
      console.error("Error deleting package attributes :", err);
      res.status(500).send("Error deleting package");
    } else {
      // Delete associated records from the packages table
      const deletePackagesQuery = "DELETE FROM packages WHERE id = $1";
      pool.query(deletePackagesQuery, [packageId], (err, result) => {
        if (err) {
          console.error("Error deleting package attributes:", err);
          res.status(500).send("Error deleting package ");
        } else {
          res.json({
            success: true,

            message: "package delete successfully!",
          });
        }
      });
    }
  });
});

// edit package
exports.editPackage = catchAsyncFunction(async (req, res) => {
  const package1 = await pool.query("select * from packages where id =$1", [
    req.body.package_id,
  ]);
  console.log(package1.rows[0], "row");

  let imagePaths = [];

  if (req.files && req.files.image) {
    if (Array.isArray(req.files.image) && req.files.image.length > 0) {
      for (let image of req.files.image) {
        try {
          const s3Url = await s3.uploadToS3(image, "images");
          imagePaths.push(s3Url);
        } catch (error) {
          console.error("Error uploading image to S3:", error);
          return res.status(500).json({
            success: false,
            message: "Error uploading image to S3",
          });
        }
      }
    }
  }

  const imageToUpdate =
    imagePaths.length > 0 ? imagePaths[0] : package1.rows[0].image; // Use the previous image if no new image is provided

  const user = await pool.query(
    "update packages set title=$1, details=$2, price=$3, added_by=$4, image=$5 where id = $6 RETURNING *",
    [
      req.body.title,
      req.body.details,
      req.body.price,
      req.body.added_by,
      imageToUpdate, // Use the previous image if no new image is provided
      req.body.package_id,
    ]
  );

  const deleteAttributes = await pool.query(
    "delete from package_attribute where package_id =$1",
    [req.body.package_id]
  );

  for (const element of req.body.attributes) {
    // Parse the JSON string into a JavaScript object
    const dataObject = JSON.parse(element);

    // Access individual values using keys
    const attribute_id = dataObject.attribute_id;
    const value = dataObject.value;
    const attributeTitle = dataObject.attributeTitle;
        try {
            const user2 = await pool.query(
                'INSERT INTO package_attribute (attribute_id, package_id, des_pkg) VALUES ($1, $2, $3) RETURNING *',
                [attribute_id, user.rows[0].id, value]
            );
        } catch (error) {
            console.error('Error inserting attribute into database:', error);
            // Handle the error, you can choose to return an error response if needed
        }
  }

  res.json({
    success: true,
    message: "Package edited successfully!",
  });
});
