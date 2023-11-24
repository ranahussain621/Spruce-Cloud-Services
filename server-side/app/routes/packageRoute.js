'use strict'

const express = require('express')
const router = express.Router()
const { addAttribute, getAttributes, getPackageForSearch, 
    addPackage, getPackages, getPackageDetails, getPackagesFromAttributeId,
     getPackagesFromAttribute, addPackagesToCompare, getCompareItems, 
     addCustomPage, getCustomPage, addPackagesTofeature,
      getFeaturePackages, 
      getCurrentUserPackages,
      deletePackage,
      editPackage} = require('../controllers/packagesController')
      const upload = require('../utils/multerConfig')

router.route('/add-attribute').post(addAttribute)
router.route('/get-attributes').get(getAttributes)
router.post('/add-package',upload.fields([{name: "image",maxCount: 5,}, ]),addPackage);

router.route('/get-packages').get(getPackages)
router.route('/get-package-details').post(getPackageDetails)
router.route('/get-packages-from-attribute').post(getPackagesFromAttribute)

router.route('/add-packages-to-compare').post(addPackagesToCompare)
router.route('/get-compare-items').post(getCompareItems)
router.route('/add-custom-page').post(addCustomPage)

router.route('/get-custom-page').get(getCustomPage)
router.route('/add-packages-feature').post(addPackagesTofeature)
router.route('/get-feature-packages').post(getFeaturePackages)

router.route('/get-current-user-packages').post(getCurrentUserPackages)
router.route('/get-packages-by-attrid').post(getPackagesFromAttributeId)
router.route('/get-packages-for-search').get(getPackageForSearch)

router.route('/delete-package/:id').delete(deletePackage)
router.put('/edit-package',upload.fields([{name: "image",maxCount: 5,}, ]),editPackage);
module.exports = router;