export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: " Irani Std. Tea",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "524353",
              name: " Irani Std. Tea",
              city: "Bangalore",
              slugs: {
                restaurant: "cafe-irani-hsr-hsr",
                city: "bangalore",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "bwkz4uv3qyx33brboywf",
              locality: "4th Sector",
              areaName: "HSR Layout",
              costForTwo: "10000",
              costForTwoMessage: "₹100 for two",
              cuisines: ["Snacks", "Beverages"],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "524353",
                fees: [
                  {
                    name: "TYPE_DISTANCE",
                    fee: 5500,
                  },
                  {
                    name: "TYPE_TIME",
                  },
                ],
                totalFee: 5500,
                title: "Delivery Charge",
                amount: "5500",
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "<b>4.5 kms</b> | ₹55 Delivery fee will apply",
              },
              parentId: "374583",
              avgRatingString: "4.4",
              totalRatingsString: "5K+ ratings",
              sla: {
                restaurantId: "524353",
                deliveryTime: 21,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                lastMileTravel: 4.5,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 3,
                slaString: "20-25 MINS",
                lastMileTravelString: "4.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-08-23 00:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Get every item @ 79",
                shortDescriptionList: [
                  {
                    meta: "Get every item @ 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Get every item @ 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "cafe-irani-hsr-hsr",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "No 264, PID No 17-264, Hosur Sarjapura Road, HSR Layout 4th Sector, Bangalore, Bengaluru (Bangalore) Urban, Karnataka, 560102",
                },
                {
                  title: "Cuisines",
                  message: "Snacks,Beverages",
                },
              ],
              logo: "v1666872285/Brand logo/Irani_Std._Tea",
              totalRatings: 5000,
              aggregatedDiscountInfoV2: {
                header: "Get every item @ 79",
                shortDescriptionList: [
                  {
                    meta: "Get every item @ 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Get every item @ 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 1,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 79,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/524353",
              },
              expectationNotifiers: [
                {
                  text: "<b>4.5 kms</b> | ₹55 Delivery fee will apply",
                  icon: {
                    imageId: "v1648635511/Delivery_fee_new_cjxumu",
                  },
                  popup: {
                    cta: {},
                  },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>4.5 kms</b> | ₹55 Delivery fee will apply",
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                  trailingIcon: {},
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "12.913690428923749,77.64431577998208",
              backgroundImageOverlayInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "ITEMS AT ₹79",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["84bb0fe7-7bb0-45ef-a155-01237c5e145c"],
                      expiryTime: "1970-01-02T03:27:23Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "524353",
                      offerLogo: "offers/deal-of-day",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["bb301951-030a-4716-ad6b-25f7ac1f3251"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹179",
                      offerType: "offers",
                      restId: "524353",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹125 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["4b38c3cc-e79d-4c76-a65d-b16c203bb3e5"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLATDEAL",
                      description: "ABOVE ₹299",
                      offerType: "offers",
                      restId: "524353",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      offerIds: ["4cab15ad-5a73-4aa1-91e0-f945bd61c465"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "524353",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "30% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      offerIds: ["a2812cd5-616f-47e9-81e6-04d650f77d20"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AXIS30",
                      description: "ABOVE ₹200",
                      offerType: "offers",
                      restId: "524353",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "2628588",
                          creativeId: "TopPicks2024/123984721B.png",
                          title: "Paneer Tawa Paratha",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "123984721",
                              name: "Paneer Tawa Paratha",
                              category: "Tawa Paratha",
                              imageId: "8e3157359bc648f051ff4b589d3945cd",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351929",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964321",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964331",
                                      name: "Extra Butter Chiplet",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964328",
                                      name: "Extra Curd",
                                      price: 1000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964336",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964333",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964283",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964347",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964346",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chai",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123912868",
                              name: "Irani Chai",
                              category: "Chai",
                              imageId: "75e5d1cb2d16f9f0565ae9cdcb2f231e",
                              inStock: 1,
                              isVeg: 1,
                              finalPrice: 7900,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "33041902",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "250 Ml",
                                        price: 119,
                                        default: 1,
                                        id: "102289266",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "500 Ml",
                                        price: 179,
                                        id: "102289267",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "33041902",
                                        variationId: "102289266",
                                      },
                                    ],
                                    price: 11900,
                                    finalPrice: {
                                      units: "79",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "33041902",
                                        variationId: "102289267",
                                      },
                                    ],
                                    price: 17900,
                                    finalPrice: {
                                      units: "139",
                                    },
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 11900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [{}],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "688 ratings",
                                  ratingCountV2: "688",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984689",
                              name: "Irani Ginger Chai",
                              category: "Chai",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "33041903",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "250 Ml",
                                        price: 119,
                                        default: 1,
                                        id: "102289269",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "500 Ml",
                                        price: 179,
                                        id: "102289270",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "33041903",
                                        variationId: "102289269",
                                      },
                                    ],
                                    price: 11900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "33041903",
                                        variationId: "102289270",
                                      },
                                    ],
                                    price: 17900,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 11900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "632 ratings",
                                  ratingCountV2: "632",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "136656919",
                              name: "Irani Lemon Tea with Honey",
                              category: "Chai",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "40257200",
                                    name: "Choice of Portion",
                                    variations: [
                                      {
                                        name: "250 ML",
                                        price: 139,
                                        default: 1,
                                        id: "128859294",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "500 ML",
                                        price: 199,
                                        id: "128859295",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "40257200",
                                        variationId: "128859294",
                                      },
                                    ],
                                    price: 13900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "40257200",
                                        variationId: "128859295",
                                      },
                                    ],
                                    price: 19900,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 13900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "136656920",
                              name: "Irani Lemon Tea with Sugar",
                              category: "Chai",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "40257201",
                                    name: "Choice of Portion",
                                    variations: [
                                      {
                                        name: "250 ML",
                                        price: 119,
                                        default: 1,
                                        id: "128859297",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "500 ML",
                                        price: 179,
                                        id: "128859298",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "40257201",
                                        variationId: "128859297",
                                      },
                                    ],
                                    price: 11900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "40257201",
                                        variationId: "128859298",
                                      },
                                    ],
                                    price: 17900,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 11900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984687",
                              name: "Irani Black Chai",
                              category: "Chai",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "33041901",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "250 Ml",
                                        price: 119,
                                        default: 1,
                                        id: "102289263",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "500 Ml",
                                        price: 179,
                                        id: "102289264",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "33041901",
                                        variationId: "102289263",
                                      },
                                    ],
                                    price: 11900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "33041901",
                                        variationId: "102289264",
                                      },
                                    ],
                                    price: 17900,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 11900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.4",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Milk",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "98187999",
                              name: "Irani Hot Chocolate",
                              category: "Milk",
                              imageId: "151d5cdc49461aca1b7f248814006700",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "80 ratings",
                                  ratingCountV2: "80",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976573",
                              name: "Irani Horlicks Milk",
                              category: "Milk",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976575",
                              name: "Irani Boost Milk",
                              category: "Milk",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976571",
                              name: "Irani Badam Milk",
                              category: "Milk",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976569",
                              name: "Irani Hot Milk",
                              category: "Milk",
                              imageId: "d71757e8873a1d3605a5400d330dae38",
                              inStock: 1,
                              isVeg: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Bun, Butter & Malai",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101868196",
                              name: "Masala Bun Maska",
                              category: "Bun, Butter & Malai",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351925",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964281",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964284",
                                      name: "Jam",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964282",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984700",
                              name: "Nutella Bun",
                              category: "Bun, Butter & Malai",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351928",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964269",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964275",
                                      name: "Jam",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964274",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "59 ratings",
                                  ratingCountV2: "59",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984701",
                              name: "Peanut Butter Bun",
                              category: "Bun, Butter & Malai",
                              inStock: 1,
                              isVeg: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351930",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964243",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964241",
                                      name: "Jam",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964244",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "89971315",
                              name: "Bun Maska",
                              category: "Bun, Butter & Malai",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351911",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964217",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964232",
                                      name: "Jam",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964229",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "496 ratings",
                                  ratingCountV2: "496",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Samosa",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984702",
                              name: "Mini Onion Samosa",
                              category: "Veg Samosa",
                              imageId: "c9711a6d096549cfea3a6a1b1243cd28",
                              inStock: 1,
                              isVeg: 1,
                              price: 5900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351927",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964249",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964240",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964250",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964247",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "196 ratings",
                                  ratingCountV2: "196",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984703",
                              name: "Aloo Samosa",
                              category: "Veg Samosa",
                              inStock: 1,
                              isVeg: 1,
                              price: 7900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351909",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964245",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964219",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964218",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964222",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "65 ratings",
                                  ratingCountV2: "65",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Non Veg Samosa",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984705",
                              name: "Mini Chicken Samosa",
                              category: "Non Veg Samosa",
                              inStock: 1,
                              price: 7900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351926",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964306",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964320",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964330",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964327",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "57 ratings",
                                  ratingCountV2: "57",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984704",
                              name: "Tandoori Chicken Samosa",
                              category: "Non Veg Samosa",
                              imageId: "b5e73e12213d7e1aa8b2b0ee9fffa46e",
                              inStock: 1,
                              price: 7900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351934",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964308",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964221",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964316",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964324",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Savouries",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100068401",
                              name: "Bread Pakora",
                              category: "Savouries",
                              inStock: 1,
                              isVeg: 1,
                              price: 6900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "148 ratings",
                                  ratingCountV2: "148",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "All Day Breakfast",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "89971321",
                              name: "Bun Omelette",
                              category: "All Day Breakfast",
                              inStock: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351913",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964287",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964285",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964292",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964289",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "355 ratings",
                                  ratingCountV2: "355",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "136656918",
                              name: "Bun Omelette With Extra Cheese",
                              category: "All Day Breakfast",
                              inStock: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "144069584",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "115627369",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "115627370",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "115627371",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984707",
                              name: "Poha",
                              category: "All Day Breakfast",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351932",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964294",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964301",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964298",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964305",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "97 ratings",
                                  ratingCountV2: "97",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "89971320",
                              name: "Cheese Omelette",
                              category: "All Day Breakfast",
                              inStock: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351914",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964329",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964326",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964335",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964332",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984706",
                              name: "Veg Omelette",
                              category: "All Day Breakfast",
                              inStock: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351937",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964313",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964319",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964317",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964325",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Quick Bites",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984713",
                              name: "Chicken Fries",
                              category: "Quick Bites",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136524",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "12 Pc",
                                        price: 200,
                                        default: 1,
                                        id: "115905653",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "20 Pc",
                                        price: 300,
                                        id: "115905654",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136524",
                                        variationId: "115905653",
                                      },
                                    ],
                                    price: 20000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351916",
                                        addonId: "111964223",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964220",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964225",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964224",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964228",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964226",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964233",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964279",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136524",
                                        variationId: "115905654",
                                      },
                                    ],
                                    price: 30000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351916",
                                        addonId: "111964223",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964220",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964225",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964224",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964228",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964226",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964233",
                                      },
                                      {
                                        groupId: "133351916",
                                        addonId: "111964279",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351916",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964223",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964220",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964225",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964224",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964228",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964226",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964233",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964279",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 20000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "98822398",
                              name: "Hot Chicken Wings",
                              category: "Quick Bites",
                              imageId: "854f542b85d40829f6589121ea8fc38a",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136527",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "3 Pc",
                                        price: 150,
                                        default: 1,
                                        id: "115905659",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "6 Pc",
                                        price: 250,
                                        id: "115905660",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136527",
                                        variationId: "115905659",
                                      },
                                    ],
                                    price: 15000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351923",
                                        addonId: "111964365",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964364",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964372",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964377",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964375",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964380",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964379",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964351",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136527",
                                        variationId: "115905660",
                                      },
                                    ],
                                    price: 25000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351923",
                                        addonId: "111964365",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964364",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964372",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964377",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964375",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964380",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964379",
                                      },
                                      {
                                        groupId: "133351923",
                                        addonId: "111964351",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351923",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964365",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964364",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964372",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964377",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964375",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964380",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964379",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964351",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 15000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "104 ratings",
                                  ratingCountV2: "104",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984712",
                              name: "Chicken Nuggets",
                              category: "Quick Bites",
                              imageId: "5cee5e32248ad7fa0b549032f50018c8",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136525",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "6 Pc",
                                        price: 160,
                                        default: 1,
                                        id: "115905655",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "10 Pc",
                                        price: 240,
                                        id: "115905656",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136525",
                                        variationId: "115905655",
                                      },
                                    ],
                                    price: 16000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351917",
                                        addonId: "111964256",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964255",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964258",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964257",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964262",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964260",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964267",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964280",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136525",
                                        variationId: "115905656",
                                      },
                                    ],
                                    price: 24000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351917",
                                        addonId: "111964256",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964255",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964258",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964257",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964262",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964260",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964267",
                                      },
                                      {
                                        groupId: "133351917",
                                        addonId: "111964280",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351917",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964256",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964255",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964258",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964257",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964262",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964260",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964267",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964280",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 16000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984711",
                              name: "Hashbrowns",
                              category: "Quick Bites",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136526",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "4 Pc",
                                        price: 140,
                                        default: 1,
                                        id: "115905657",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "8 Pc",
                                        price: 240,
                                        id: "115905658",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136526",
                                        variationId: "115905657",
                                      },
                                    ],
                                    price: 14000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351922",
                                        addonId: "111964391",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964389",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964394",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964367",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964366",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964369",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964368",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964304",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136526",
                                        variationId: "115905658",
                                      },
                                    ],
                                    price: 24000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351922",
                                        addonId: "111964391",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964389",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964394",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964367",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964366",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964369",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964368",
                                      },
                                      {
                                        groupId: "133351922",
                                        addonId: "111964304",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351922",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964391",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964389",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964394",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964367",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964366",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964369",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964368",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964304",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 14000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "98822400",
                              name: "Chubby Wedges",
                              category: "Quick Bites",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351918",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964362",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964339",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964338",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964341",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964340",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964343",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964342",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964300",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984708",
                              name: "Seasoned Fries",
                              category: "Quick Bites",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136528",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Salty",
                                        price: 140,
                                        default: 1,
                                        id: "115905661",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Peri Peri",
                                        price: 150,
                                        id: "115905662",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136528",
                                        variationId: "115905661",
                                      },
                                    ],
                                    price: 14000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351933",
                                        addonId: "111964348",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964352",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964350",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964355",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964354",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964360",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964358",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964295",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136528",
                                        variationId: "115905662",
                                      },
                                    ],
                                    price: 15000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351933",
                                        addonId: "111964348",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964352",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964350",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964355",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964354",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964360",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964358",
                                      },
                                      {
                                        groupId: "133351933",
                                        addonId: "111964295",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351933",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964348",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964352",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964350",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964355",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964354",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964360",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964358",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964295",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 14000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984709",
                              name: "Veg Fingers",
                              category: "Quick Bites",
                              imageId: "3a78b06b48bc03d0eb163d58a999bb27",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "37136529",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "5 Pc",
                                        price: 120,
                                        default: 1,
                                        id: "115905663",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "8 Pc",
                                        price: 160,
                                        id: "115905664",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "37136529",
                                        variationId: "115905663",
                                      },
                                    ],
                                    price: 12000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351935",
                                        addonId: "111964345",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964344",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964383",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964385",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964384",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964387",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964386",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964299",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "37136529",
                                        variationId: "115905664",
                                      },
                                    ],
                                    price: 16000,
                                    addonCombinations: [
                                      {
                                        groupId: "133351935",
                                        addonId: "111964345",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964344",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964383",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964385",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964384",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964387",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964386",
                                      },
                                      {
                                        groupId: "133351935",
                                        addonId: "111964299",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "133351935",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964345",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964344",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964383",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964385",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964384",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964387",
                                      name: "Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964386",
                                      name: "Tandoori Mayonnaise",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964299",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 12000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Maggie",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976609",
                              name: "Fried Egg Maggie",
                              category: "Maggie",
                              imageId: "b202d70fafdb7023666a6558b104befa",
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351920",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964273",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964215",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964213",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964227",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964234",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964231",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964353",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 7,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "134 ratings",
                                  ratingCountV2: "134",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976595",
                              name: "Plain Maggie",
                              category: "Maggie",
                              imageId: "b94a89f50cdba42be1e81b34e9915dbc",
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351931",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964382",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964381",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964252",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964251",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964253",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964263",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964349",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 7,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "83 ratings",
                                  ratingCountV2: "83",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976597",
                              name: "Veg Maggie",
                              category: "Maggie",
                              imageId: "0812d55a51a53fd741688c307ef46e26",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              finalPrice: 7900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351936",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964261",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964268",
                                      name: "Extra Cheese",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964265",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964272",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964270",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964276",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964356",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 7,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [{}],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Tawa Paratha",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984721",
                              name: "Paneer Tawa Paratha",
                              category: "Tawa Paratha",
                              imageId: "8e3157359bc648f051ff4b589d3945cd",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351929",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964321",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964331",
                                      name: "Extra Butter Chiplet",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964328",
                                      name: "Extra Curd",
                                      price: 1000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964336",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964333",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964283",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964347",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964346",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984719",
                              name: "Aloo Tawa Paratha",
                              category: "Tawa Paratha",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351910",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964237",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964235",
                                      name: "Extra Butter Chiplet",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964242",
                                      name: "Extra Curd",
                                      price: 1000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964239",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964248",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964246",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964359",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964357",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "54 ratings",
                                  ratingCountV2: "54",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984720",
                              name: "Gobi Tawa Paratha",
                              category: "Tawa Paratha",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "133351921",
                                  groupName: "Add-on",
                                  choices: [
                                    {
                                      id: "111964307",
                                      name: "Coke",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964314",
                                      name: "Extra Butter Chiplet",
                                      price: 1500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964312",
                                      name: "Extra Curd",
                                      price: 1000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964318",
                                      name: "Fresh Lime Soda",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964315",
                                      name: "Ketchup",
                                      price: 300,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964323",
                                      name: "Lemon Ice Tea",
                                      price: 8900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964363",
                                      name: "Sprite",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "111964361",
                                      name: "Thumsup",
                                      price: 7000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Fizz Up",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984724",
                              name: "Lemon Ice Tea",
                              category: "Fizz Up",
                              imageId: "152dd893e49ba095078652777f1c0177",
                              inStock: 1,
                              isVeg: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984725",
                              name: "Fresh Lime Soda",
                              category: "Fizz Up",
                              imageId: "a0b3665744cdbd5c47bf704378831b16",
                              inStock: 1,
                              isVeg: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125028417",
                              name: "Nannari Soda",
                              category: "Fizz Up",
                              inStock: 1,
                              isVeg: 1,
                              price: 8900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cookies",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976635",
                              name: "Osmania Biscuits 100 Grams",
                              category: "Cookies",
                              imageId: "de5dcc83a6827f80853bd18dd28b3f48",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "195 ratings",
                                  ratingCountV2: "195",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125028413",
                              name: "Baked Cheese Cake",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984732",
                              name: "Dark Chocolate Brownie",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984735",
                              name: "Chocolate Walnut Brownie",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "123984728",
                              name: "Banana Walnut Cake",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "89971322",
                              name: "Banana Cake",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125028414",
                              name: "Chocolate Muffin (2Pcs)",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125028415",
                              name: "Tender Coconut Pudding",
                              category: "Desserts",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Soft Drinks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976654",
                              name: "Coke 330 Ml",
                              category: "Soft Drinks",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976658",
                              name: "Thumsup 330 Ml",
                              category: "Soft Drinks",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976656",
                              name: "Sprite 330 Ml",
                              category: "Soft Drinks",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124976655",
                              name: "Pepsi 330 Ml",
                              category: "Soft Drinks",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cold Press Juice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "98628224",
                              name: "Muskmelon Juice",
                              category: "Cold Press Juice",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                              itemPriceStrikeOff: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 21221194003007"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: " Irani Std. Tea",
                      area: "HSR Layout",
                      completeAddress:
                        "No 264, PID No 17-264, Hosur Sarjapura Road, HSR Layout 4th Sector, Bangalore, Bengaluru (Bangalore) Urban, Karnataka, 560102",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "822a5537-ad37-4c60-9490-62ce85eae833",
  sid: "fkq39bfb-b68d-4842-9554-c35d577ed3d7",
  deviceId: "fbf49ccc-ce36-0361-43b7-21069e687db9",
  csrfToken: null,
};

export const RESTRAUNT_MOCK_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CJhlELQ4KIDI8J7Aku/1czCnEzgB",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 16,
                  bottom: 4,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 8,
                  top: 8,
                  right: 12,
                  bottom: 4,
                },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750131",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Dosa",
                },
                {
                  id: "750643",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Idli",
                },
                {
                  id: "750201",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId: "80475",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Paratha",
                },
                {
                  id: "750229",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                    text: "Poha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for poha",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Poha",
                },
                {
                  id: "749805",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Appam.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80352?collection_id=80352&tags=layout_BAU_Contextual%2Cappam%2Clayout_ux4&type=rcv2",
                    text: "Appam",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for appam",
                    altTextCta: "open",
                  },
                  entityId: "80352",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Appam",
                },
                {
                  id: "750234",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80377",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Poori",
                },
                {
                  id: "749786",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                    text: "Omelette",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for omelette",
                    altTextCta: "open",
                  },
                  entityId: "80467",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Omelette",
                },
                {
                  id: "750591",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Biryani",
                },
                {
                  id: "749876",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Chole Bhature",
                },
                {
                  id: "750561",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                    text: "Vada",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for vada",
                    altTextCta: "open",
                  },
                  entityId: "80425",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Vada",
                },
                {
                  id: "749868",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cake",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Cakes",
                },
                {
                  id: "750197",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                    text: "Pancakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pancake",
                    altTextCta: "open",
                  },
                  entityId: "80471",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Pancakes",
                },
                {
                  id: "750242",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Puttu.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80384?collection_id=80384&tags=layout_BAU_Contextual%2Cputtu&type=rcv2",
                    text: "Puttu",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for puttu",
                    altTextCta: "open",
                  },
                  entityId: "80384",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Puttu",
                },
                {
                  id: "750598",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                    text: "Coffee",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for coffee",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Coffee",
                },
                {
                  id: "750225",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Salad",
                },
                {
                  id: "749816",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Bath.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80354?collection_id=80354&tags=layout_BAU_Contextual%2Cbath%2Clayout_ux4&type=rcv2",
                    text: "Bath",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for bath",
                    altTextCta: "open",
                  },
                  entityId: "80354",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Bath",
                },
                {
                  id: "750232",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pongal.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                    text: "Pongal",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pongal",
                    altTextCta: "open",
                  },
                  entityId: "80375",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Pongal",
                },
                {
                  id: "750199",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paniyaram.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80473?collection_id=80473&tags=layout_ux4&type=rcv2",
                    text: "Paniyaram",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for paniyaram",
                    altTextCta: "open",
                  },
                  entityId: "80473",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Paniyaram",
                },
                {
                  id: "749862",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_bonda.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80363?collection_id=80363&tags=layout_BAU_Contextual%2Cbonda%2Clayout_ux4&type=rcv2",
                    text: "Bonda",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for bonda",
                    altTextCta: "open",
                  },
                  entityId: "80363",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Bonda",
                },
                {
                  id: "750554",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                    text: "Uthappam",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for uttappam",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Uthappam",
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750131",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Dosa",
                  },
                  {
                    id: "750643",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Idli",
                  },
                  {
                    id: "750201",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId: "80475",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Paratha",
                  },
                  {
                    id: "750229",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                      text: "Poha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for poha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Poha",
                  },
                  {
                    id: "749805",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Appam.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80352?collection_id=80352&tags=layout_BAU_Contextual%2Cappam%2Clayout_ux4&type=rcv2",
                      text: "Appam",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for appam",
                      altTextCta: "open",
                    },
                    entityId: "80352",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Appam",
                  },
                  {
                    id: "750234",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80377",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Poori",
                  },
                  {
                    id: "749786",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                      text: "Omelette",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for omelette",
                      altTextCta: "open",
                    },
                    entityId: "80467",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Omelette",
                  },
                  {
                    id: "750591",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Biryani",
                  },
                  {
                    id: "749876",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Chole Bhature",
                  },
                  {
                    id: "750561",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                      text: "Vada",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for vada",
                      altTextCta: "open",
                    },
                    entityId: "80425",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Vada",
                  },
                  {
                    id: "749868",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cake",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Cakes",
                  },
                  {
                    id: "750197",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                      text: "Pancakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pancake",
                      altTextCta: "open",
                    },
                    entityId: "80471",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Pancakes",
                  },
                  {
                    id: "750242",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Puttu.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80384?collection_id=80384&tags=layout_BAU_Contextual%2Cputtu&type=rcv2",
                      text: "Puttu",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for puttu",
                      altTextCta: "open",
                    },
                    entityId: "80384",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Puttu",
                  },
                  {
                    id: "750598",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                      text: "Coffee",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for coffee",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Coffee",
                  },
                  {
                    id: "750225",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Salad",
                  },
                  {
                    id: "749816",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Bath.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80354?collection_id=80354&tags=layout_BAU_Contextual%2Cbath%2Clayout_ux4&type=rcv2",
                      text: "Bath",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for bath",
                      altTextCta: "open",
                    },
                    entityId: "80354",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Bath",
                  },
                  {
                    id: "750232",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pongal.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
                      text: "Pongal",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pongal",
                      altTextCta: "open",
                    },
                    entityId: "80375",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Pongal",
                  },
                  {
                    id: "750199",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paniyaram.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80473?collection_id=80473&tags=layout_ux4&type=rcv2",
                      text: "Paniyaram",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for paniyaram",
                      altTextCta: "open",
                    },
                    entityId: "80473",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Paniyaram",
                  },
                  {
                    id: "749862",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_bonda.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80363?collection_id=80363&tags=layout_BAU_Contextual%2Cbonda%2Clayout_ux4&type=rcv2",
                      text: "Bonda",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for bonda",
                      altTextCta: "open",
                    },
                    entityId: "80363",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Bonda",
                  },
                  {
                    id: "750554",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Uttapam.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80415?collection_id=80415&tags=layout_CCS_Uthappam&type=rcv2",
                      text: "Uthappam",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for uttappam",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80415&tags=layout_CCS_Uthappam",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Uthappam",
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Bangalore",
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "711368",
                      name: "Salad Days",
                      cloudinaryImageId: "cfa1123ebf17413dc7d0a80c7361fab3",
                      locality: "BTM Layout",
                      areaName: "HSR",
                      costForTwo: "₹500 for two",
                      cuisines: ["Salads"],
                      avgRating: 4.5,
                      parentId: "796",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3.8,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "3.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 03:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/salad-days-btm-layout-hsr-bangalore-711368",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "381854",
                      name: "ITC Sunfeast Baked Creations",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/67b5a520-5f15-4280-950c-56c736da1c2c_381854.JPG",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Continental",
                        "Cafe",
                        "Snacks",
                      ],
                      avgRating: 4.6,
                      parentId: "12285",
                      avgRatingString: "4.6",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId:
                              "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                            shortDescription: "Perfect cake delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  shortDescription: "Perfect cake delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.4",
                          ratingCount: "20+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/itc-sunfeast-baked-creations-koramangala-bangalore-381854",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "381853",
                      name: "ITC Master Chef Creations",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/5f883c8c-ba8b-4656-92fb-eb27abd48e2e_381853.JPG",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹650 for two",
                      cuisines: [
                        "North Indian",
                        "Biryani",
                        "Kebabs",
                        "Mediterranean",
                        "Mughlai",
                      ],
                      avgRating: 4.5,
                      parentId: "11992",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "2.8",
                          ratingCount: "9",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/itc-master-chef-creations-koramangala-bangalore-381853",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "280216",
                      name: "Lavonne",
                      cloudinaryImageId: "udzufnegmtvimdypnfbk",
                      locality: "Indiranagar",
                      areaName: "Indiranagar",
                      costForTwo: "₹1000 for two",
                      cuisines: ["Bakery", "Desserts"],
                      avgRating: 4.6,
                      parentId: "10530",
                      avgRatingString: "4.6",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 22:40:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.4",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "263485",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
                      locality: "Kormangala 8th Block",
                      areaName: "Kormangala",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      parentId: "281782",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 17,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹199",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "241027",
                      name: "Namaste",
                      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
                      locality: "3rd Sector",
                      areaName: "Hsr Layout",
                      costForTwo: "₹100 for two",
                      cuisines: [
                        "South Indian",
                        "Thalis",
                        "Biryani",
                        "Desserts",
                        "Beverages",
                        "Indian",
                      ],
                      avgRating: 4.3,
                      parentId: "366271",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 34,
                        lastMileTravel: 4.3,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "4.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/namaste-3rd-sector-hsr-layout-bangalore-241027",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "255801",
                      name: "Great Indian Khichdi by EatFit",
                      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Healthy Food",
                        "Snacks",
                        "Desserts",
                        "Rajasthani",
                        "South Indian",
                        "Maharashtrian",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      veg: true,
                      parentId: "319582",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-6th-block-koramangala-bangalore-255801",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "70012",
                      name: "SMOOR",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/4b1fceb1-cf54-43b9-afe7-58f2e2fdeca5_70012.jpg",
                      locality: "7th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹450 for two",
                      cuisines: [
                        "Asian",
                        "Burgers",
                        "Italian",
                        "Thai",
                        "Sushi",
                        "Salads",
                        "Pastas",
                        "Pizzas",
                        "Mexican",
                        "Chinese",
                        "Bakery",
                        "Beverages",
                        "Cafe",
                        "Desserts",
                      ],
                      avgRating: 4.5,
                      parentId: "3506",
                      avgRatingString: "4.5",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 03:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Desserts.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId:
                              "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                            shortDescription: "Perfect cake delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  shortDescription: "Perfect cake delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/smoor-7th-block-koramangala-bangalore-70012",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "107443",
                      name: "Lo! - Low Carb and Keto Foods",
                      cloudinaryImageId: "o8t0w5gdlujpigauaflw",
                      locality: "HSR Layout",
                      areaName: "HSR SECTOR 6",
                      costForTwo: "₹150 for two",
                      cuisines: ["Healthy Food", "Keto", "Continental"],
                      avgRating: 4.4,
                      parentId: "8282",
                      avgRatingString: "4.4",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3.7,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "3.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-hsr-layout-hsr-sector-6-bangalore-107443",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "288678",
                      name: "Home Plate by EatFit",
                      cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "North Indian",
                        "Home Food",
                        "Healthy Food",
                        "Indian",
                        "Punjabi",
                        "South Indian",
                        "Rajasthani",
                        "Maharashtrian",
                        "Snacks",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "301197",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 17,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/home-plate-by-eatfit-6th-block-koramangala-bangalore-288678",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "558763",
                      name: "HRX by EatFit",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/27b3c3e0-1215-45b8-9807-81ea0ea98b0a_558763.jpg",
                      locality: "6th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹450 for two",
                      cuisines: ["Healthy Food", "Salads", "Burgers"],
                      avgRating: 4.5,
                      parentId: "335529",
                      avgRatingString: "4.5",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 14,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/hrx-by-eatfit-6th-block-koramangala-bangalore-558763",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "687150",
                      name: "Ovenfresh Cakes and Desserts",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/6/62fcfc38-be52-460c-84aa-696a090eaf56_687150.jpg",
                      locality: "BTM Layout",
                      areaName: "KORAMANGLA 6th Block",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Ice Cream",
                        "Sweets",
                        "Juices",
                        "Bengali",
                        "Pizzas",
                      ],
                      avgRating: 4.3,
                      parentId: "1372",
                      avgRatingString: "4.3",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId:
                              "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                            shortDescription: "Perfect cake delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  shortDescription: "Perfect cake delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/ovenfresh-cakes-and-desserts-btm-layout-koramangla-6th-block-bangalore-687150",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "733092",
                      name: "Caterspoint",
                      cloudinaryImageId: "be3c347a3ff9e54393083264ebb9228f",
                      locality: "Hosur Road",
                      areaName: "HSR",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Healthy Food",
                        "Italian",
                        "Salads",
                        "Beverages",
                        "Desserts",
                      ],
                      avgRating: 4.5,
                      parentId: "11011",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/caterspoint-hosur-road-hsr-bangalore-733092",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "307",
                      name: "A2B - Adyar Ananda Bhavan",
                      cloudinaryImageId: "gxe4mn4ubw70yx3flyar",
                      locality: "BTM Layout",
                      areaName: "Btm Layout",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Chinese",
                      ],
                      avgRating: 4.5,
                      parentId: "22",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 32,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 22:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            description: "OnlyOnSwiggy",
                          },
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "OnlyOnSwiggy",
                                  imageId:
                                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹75 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.0",
                          ratingCount: "5K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-btm-layout-bangalore-307",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "747260",
                      name: "Green Cravings",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/6f01ec64-58f3-4345-afbc-3ee8483d4644_747260.JPG",
                      locality: "EJIPURA",
                      areaName: "Koramangala",
                      costForTwo: "₹350 for two",
                      cuisines: ["Healthy Food", "Fast Food", "Grill"],
                      avgRating: 3.8,
                      parentId: "8660",
                      avgRatingString: "3.8",
                      totalRatingsString: "20+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹159",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/green-cravings-ejipura-koramangala-bangalore-747260",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "776753",
                      name: "Blue Tokai Coffee Roasters",
                      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
                      locality: "1St Cross Rd",
                      areaName: "Koramangala",
                      costForTwo: "₹600 for two",
                      cuisines: ["Cafe", "Coffee", "Beverages"],
                      avgRating: 4.7,
                      parentId: "2682",
                      avgRatingString: "4.7",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 16,
                        lastMileTravel: 0.4,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 23:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "15% OFF",
                        subHeader: "ABOVE ₹390",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-1st-cross-rd-koramangala-bangalore-776753",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "25645",
                      name: "Barista Coffee",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/9aa4baf6-83f7-4995-8e3b-fb998c9da055_25645.jpg",
                      locality: "4th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹350 for two",
                      cuisines: ["Beverages", "Snacks", "Desserts"],
                      avgRating: 4.3,
                      parentId: "416281",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹129",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.0",
                          ratingCount: "500+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/barista-coffee-4th-block-koramangala-bangalore-25645",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "751353",
                      name: "Tim Hortons",
                      cloudinaryImageId: "26c8263d346b308a6a62c003d1d9eca1",
                      locality: "8TH BLOCK",
                      areaName: "KORAMANGALA",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Coffee",
                        "Cafe",
                        "Beverages",
                        "Desserts",
                        "sandwich",
                        "Fast Food",
                      ],
                      avgRating: 4.4,
                      parentId: "258236",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/tim-hortons-8th-block-koramangala-bangalore-751353",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "125956",
                      name: "Glen's Bakehouse",
                      cloudinaryImageId: "whfviizdgvwg0uwfk8dy",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Desserts",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Italian",
                      ],
                      avgRating: 4.6,
                      parentId: "3220",
                      avgRatingString: "4.6",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Gourmet.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Gourmet.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.3",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/glens-bakehouse-koramangala-bangalore-125956",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "736632",
                      name: "Saladspoint",
                      cloudinaryImageId: "6116a2736e177c4a872d11a9d077584a",
                      locality: "Madiwala",
                      areaName: "Koramangala",
                      costForTwo: "₹500 for two",
                      cuisines: ["Salads", "Healthy Food", "Juices"],
                      avgRating: 4.6,
                      parentId: "8786",
                      avgRatingString: "4.6",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-15 01:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/saladspoint-madiwala-koramangala-bangalore-736632",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Bangalore",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance(Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "DeliveryTime",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost:LowtoHigh",
              },
              {
                key: "costForTwoDesc",
                title: "Cost:HightoLow",
              },
            ],
            restaurantCount: 1882,
            facetList: [
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Fast Delivery",
                    id: "deliveryTimefacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Cuisines",
                id: "catalog_cuisines",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Afghani",
                    id: "query_afghani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "American",
                    id: "query_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Andhra",
                    id: "query_andhra",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Arabian",
                    id: "query_arabian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Asian",
                    id: "query_asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Assamese",
                    id: "query_assamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Awadhi",
                    id: "query_awadhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bakery",
                    id: "query_bakery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Barbecue",
                    id: "query_barbecue",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bengali",
                    id: "query_bengali",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Beverages",
                    id: "query_beverages",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bihari",
                    id: "query_bihari",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Biryani",
                    id: "query_biryani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "British",
                    id: "query_british",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bubble Tea",
                    id: "query_bubble_tea",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Buffalo meat",
                    id: "query_buffalo_meat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burger",
                    id: "query_burger",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burgers",
                    id: "query_burgers",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burmese",
                    id: "query_burmese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cafe",
                    id: "query_cafe",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes",
                    id: "query_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes & Pastries",
                    id: "query_cakes_&_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes and Pastries",
                    id: "query_cakes_and_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chaat",
                    id: "query_chaat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chettinad",
                    id: "query_chettinad",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coastal",
                    id: "query_coastal",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coffee",
                    id: "query_coffee",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Combo",
                    id: "query_combo",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Continental",
                    id: "query_continental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Default",
                    id: "query_default",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Desserts",
                    id: "query_desserts",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "European",
                    id: "query_european",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fast Food",
                    id: "query_fast_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "French",
                    id: "query_french",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "German",
                    id: "query_german",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Grill",
                    id: "query_grill",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Gujarati",
                    id: "query_gujarati",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Haleem",
                    id: "query_haleem",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy Food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Home Food",
                    id: "query_home_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Hyderabadi",
                    id: "query_hyderabadi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream",
                    id: "query_ice_cream",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream Cakes",
                    id: "query_ice_cream_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indian",
                    id: "query_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indonesian",
                    id: "query_indonesian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian",
                    id: "query_italian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian-American",
                    id: "query_italian-american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Jain",
                    id: "query_jain",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Japanese",
                    id: "query_japanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juices",
                    id: "query_juices",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kashmiri",
                    id: "query_kashmiri",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kebabs",
                    id: "query_kebabs",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kerala",
                    id: "query_kerala",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Keto",
                    id: "query_keto",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Khasi",
                    id: "query_khasi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Korean",
                    id: "query_korean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lebanese",
                    id: "query_lebanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lucknowi",
                    id: "query_lucknowi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Maharashtrian",
                    id: "query_maharashtrian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Malaysian",
                    id: "query_malaysian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mangalorean",
                    id: "query_mangalorean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Meat",
                    id: "query_meat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mediterranean",
                    id: "query_mediterranean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mexican",
                    id: "query_mexican",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Middle Eastern",
                    id: "query_middle_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Momos",
                    id: "query_momos",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mughlai",
                    id: "query_mughlai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Navratri Special",
                    id: "query_navratri_special",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Nepalese",
                    id: "query_nepalese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Eastern",
                    id: "query_north_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Indian",
                    id: "query_north_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriental",
                    id: "query_oriental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriya",
                    id: "query_oriya",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Paan",
                    id: "query_paan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pan-Asian",
                    id: "query_pan-asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Parsi",
                    id: "query_parsi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pizzas",
                    id: "query_pizzas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Punjabi",
                    id: "query_punjabi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rajasthani",
                    id: "query_rajasthani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rayalaseema",
                    id: "query_rayalaseema",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls & Wraps",
                    id: "query_rolls_&_wraps",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Salads",
                    id: "query_salads",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Seafood",
                    id: "query_seafood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Snacks",
                    id: "query_snacks",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South Indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Spanish",
                    id: "query_spanish",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sri Lankan",
                    id: "query_sri_lankan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Steakhouse",
                    id: "query_steakhouse",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Street Food",
                    id: "query_street_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sushi",
                    id: "query_sushi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sweets",
                    id: "query_sweets",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoor",
                    id: "query_tandoor",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tea",
                    id: "query_tea",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Telangana",
                    id: "query_telangana",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tex-Mex",
                    id: "query_tex-mex",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thai",
                    id: "query_thai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thalis",
                    id: "query_thalis",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tibetan",
                    id: "query_tibetan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Turkish",
                    id: "query_turkish",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Vietnamese",
                    id: "query_vietnamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Waffle",
                    id: "query_waffle",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "briyani",
                    id: "query_briyani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "fastfood",
                    id: "query_fastfood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "juice",
                    id: "query_juice",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "north indian parantha",
                    id: "query_north_indian_parantha",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "paratha",
                    id: "query_paratha",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "pav bhaji",
                    id: "query_pav_bhaji",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "pizza",
                    id: "query_pizza",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "sandwich",
                    id: "query_sandwich",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "shawarma",
                    id: "query_shawarma",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                canSearch: true,
                subLabel: "Filterbycuisine",
                openFilter: true,
              },
              {
                label: "Explore",
                id: "explore",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "New on Swiggy",
                    id: "newfacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
              },
              {
                label: "Ratings",
                id: "rating",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Ratings 4.5+",
                    id: "ratingfacetquery3",
                    analytics: {},
                  },
                  {
                    label: "Ratings 4.0+",
                    id: "ratingfacetquery4",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ratings 3.5+",
                    id: "ratingfacetquery5",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Veg/Non-Veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure Veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Non Veg",
                    id: "isVegfacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filterby",
              },
              {
                label: "Offers",
                id: "restaurantOfferMultiTd",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTdfacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Restaurantswith",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "273752",
                      name: "Brahmins Tiffin Centre",
                      cloudinaryImageId: "qmwj1vbbjljfp2saegsk",
                      locality: "New Thipasandra",
                      areaName: "Indiranagar",
                      costForTwo: "₹150 for two",
                      cuisines: ["South Indian", "Chinese"],
                      avgRating: 4.4,
                      veg: true,
                      parentId: "20078",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 6.2,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "6.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 11:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/brahmins-tiffin-centre-new-thipasandra-indiranagar-bangalore-273752",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "898222",
                      name: "Iyer Idly",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
                      locality: "Adugodi",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.7,
                      veg: true,
                      parentId: "247814",
                      avgRatingString: "4.7",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 21:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/iyer-idly-adugodi-koramangala-bangalore-898222",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "201224",
                      name: "Asha Tiffins",
                      cloudinaryImageId: "n15vckntsiboiod3gpco",
                      locality: "HSR Layout",
                      areaName: "HSR Layout",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "South Indian",
                        "Chinese",
                        "Desserts",
                        "Beverages",
                        "North Indian",
                      ],
                      avgRating: 4.5,
                      parentId: "236243",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 15:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.4",
                          ratingCount: "10K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/asha-tiffins-hsr-layout-bangalore-201224",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "387468",
                      name: "The Breakfast Nook",
                      cloudinaryImageId: "3a26aa967dc44e104627a4b8a8117454",
                      locality: "6th Sector",
                      areaName: "HSR Layout",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "American",
                        "Continental",
                        "Healthy Food",
                        "Beverages",
                      ],
                      avgRating: 4.6,
                      parentId: "257216",
                      avgRatingString: "4.6",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 3.9,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "3.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-21 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-breakfast-nook-6th-sector-hsr-layout-bangalore-387468",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "325",
                      name: "Sree Krishna Kafe",
                      cloudinaryImageId: "us72sjlfo9opsmi8fi6u",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹137 for two",
                      cuisines: ["South Indian"],
                      avgRating: 4.6,
                      parentId: "898",
                      avgRatingString: "4.6",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 22:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.3",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/sree-krishna-kafe-koramangala-bangalore-325",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "826408",
                      name: "Ministry of Oats",
                      cloudinaryImageId: "2550ad0c209aa746cf0afdf2d91f6d07",
                      locality: "Jakkasandra",
                      areaName: "HSR",
                      costForTwo: "₹400 for two",
                      cuisines: ["Healthy Food", "Desserts"],
                      avgRating: 4.7,
                      veg: true,
                      parentId: "492566",
                      avgRatingString: "4.7",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 3.9,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 22:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/ministry-of-oats-jakkasandra-hsr-bangalore-826408",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "209207",
                      name: "Prezzed Juicery",
                      cloudinaryImageId: "vyaguxl8ayzi3v5le1it",
                      locality: "1st Block",
                      areaName: "Koramangala",
                      costForTwo: "₹250 for two",
                      cuisines: ["Juices", "Healthy Food"],
                      avgRating: 4.6,
                      parentId: "21231",
                      avgRatingString: "4.6",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 32,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-14 23:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/prezzed-juicery-1st-block-koramangala-bangalore-209207",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "348811",
                      name: "The Cubano Sandwich Co.",
                      cloudinaryImageId: "10099994d51aaaa5bd92b253af10fcf4",
                      locality: "6th Sector",
                      areaName: "HSR Layout",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "American",
                        "Salads",
                        "Beverages",
                        "Continental",
                        "Mexican",
                      ],
                      avgRating: 4.4,
                      parentId: "231098",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 36,
                        lastMileTravel: 3.9,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "3.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-21 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-cubano-sandwich-co-6th-sector-hsr-layout-bangalore-348811",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              {
                text: "Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon",
              },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              {
                text: "Delhi",
                link: "https://www.swiggy.com/city/delhi",
              },
              {
                text: "Mumbai",
                link: "https://www.swiggy.com/city/mumbai",
              },
              {
                text: "Pune",
                link: "https://www.swiggy.com/city/pune",
              },
              {
                text: "Kolkata",
                link: "https://www.swiggy.com/city/kolkata",
              },
              {
                text: "Chennai",
                link: "https://www.swiggy.com/city/chennai",
              },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              {
                text: "Jaipur",
                link: "https://www.swiggy.com/city/jaipur",
              },
              {
                text: "Kochi",
                link: "https://www.swiggy.com/city/kochi",
              },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              {
                text: "Lucknow",
                link: "https://www.swiggy.com/city/lucknow",
              },
              {
                text: "Nagpur",
                link: "https://www.swiggy.com/city/nagpur",
              },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              {
                text: "Indore",
                link: "https://www.swiggy.com/city/indore",
              },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              {
                text: "Vizag",
                link: "https://www.swiggy.com/city/vizag",
              },
              {
                text: "Surat",
                link: "https://www.swiggy.com/city/surat",
              },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              {
                text: "Noida",
                link: "https://www.swiggy.com/city/noida",
              },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              {
                text: "Trichy",
                link: "https://www.swiggy.com/city/trichy",
              },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              {
                text: "Kanpur",
                link: "https://www.swiggy.com/city/kanpur",
              },
              {
                text: "Mysore",
                link: "https://www.swiggy.com/city/mysore",
              },
              {
                text: "Nashik",
                link: "https://www.swiggy.com/city/nashik",
              },
              {
                text: "Udaipur",
                link: "https://www.swiggy.com/city/udaipur",
              },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              {
                text: "Agra",
                link: "https://www.swiggy.com/city/agra",
              },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              {
                text: "Kota",
                link: "https://www.swiggy.com/city/kota",
              },
              {
                text: "Madurai",
                link: "https://www.swiggy.com/city/madurai",
              },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              {
                text: "Manipal",
                link: "https://www.swiggy.com/city/manipal",
              },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              {
                text: "Meerut",
                link: "https://www.swiggy.com/city/meerut",
              },
              {
                text: "Bhopal",
                link: "https://www.swiggy.com/city/bhopal",
              },
              {
                text: "Ooty",
                link: "https://www.swiggy.com/city/ooty",
              },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              {
                text: "Raipur",
                link: "https://www.swiggy.com/city/raipur",
              },
              {
                text: "Bikaner",
                link: "https://www.swiggy.com/city/bikaner",
              },
              {
                text: "Rajkot",
                link: "https://www.swiggy.com/city/rajkot",
              },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              {
                text: "Sirsa",
                link: "https://www.swiggy.com/city/sirsa",
              },
              {
                text: "Gwalior",
                link: "https://www.swiggy.com/city/gwalior",
              },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              {
                text: "Tirupur",
                link: "https://www.swiggy.com/city/tirupur",
              },
              {
                text: "Vellore",
                link: "https://www.swiggy.com/city/vellore",
              },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              {
                text: "Patna",
                link: "https://www.swiggy.com/city/patna",
              },
              {
                text: "Ranchi",
                link: "https://www.swiggy.com/city/ranchi",
              },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              {
                text: "Guntur",
                link: "https://www.swiggy.com/city/guntur",
              },
              {
                text: "Ujjain",
                link: "https://www.swiggy.com/city/ujjain",
              },
              {
                text: "Patiala",
                link: "https://www.swiggy.com/city/patiala",
              },
              {
                text: "Karnal",
                link: "https://www.swiggy.com/city/karnal",
              },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              {
                text: "Bhilai",
                link: "https://www.swiggy.com/city/bhilai",
              },
              {
                text: "Anand",
                link: "https://www.swiggy.com/city/anand",
              },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              {
                text: "Jammu",
                link: "https://www.swiggy.com/city/jammu",
              },
              {
                text: "Muktsar",
                link: "https://www.swiggy.com/city/muktsar",
              },
              {
                text: "Panipat",
                link: "https://www.swiggy.com/city/panipat",
              },
              {
                text: "Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad",
              },
              {
                text: "Hubli",
                link: "https://www.swiggy.com/city/hubli",
              },
              {
                text: "Belgaum",
                link: "https://www.swiggy.com/city/belgaum",
              },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              {
                text: "Solapur",
                link: "https://www.swiggy.com/city/solapur",
              },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              {
                text: "Cuttack",
                link: "https://www.swiggy.com/city/cuttack",
              },
              {
                text: "Aligarh",
                link: "https://www.swiggy.com/city/aligarh",
              },
              {
                text: "Salem",
                link: "https://www.swiggy.com/city/salem",
              },
              {
                text: "Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur",
              },
              {
                text: "Ajmer",
                link: "https://www.swiggy.com/city/ajmer",
              },
              {
                text: "Jhansi",
                link: "https://www.swiggy.com/city/jhansi",
              },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              {
                text: "Erode",
                link: "https://www.swiggy.com/city/erode",
              },
              {
                text: "Nellore",
                link: "https://www.swiggy.com/city/nellore",
              },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              {
                text: "Kurnool",
                link: "https://www.swiggy.com/city/kurnool",
              },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              {
                text: "Ambala",
                link: "https://www.swiggy.com/city/ambala",
              },
              {
                text: "Ballari",
                link: "https://www.swiggy.com/city/ballari",
              },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              {
                text: "Mathura",
                link: "https://www.swiggy.com/city/mathura",
              },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              {
                text: "Sangli",
                link: "https://www.swiggy.com/city/sangli",
              },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              {
                text: "Kadapa",
                link: "https://www.swiggy.com/city/kadapa",
              },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              {
                text: "Roorkee",
                link: "https://www.swiggy.com/city/roorkee",
              },
              {
                text: "Nanded",
                link: "https://www.swiggy.com/city/nanded",
              },
              {
                text: "Rewa",
                link: "https://www.swiggy.com/city/rewa",
              },
              {
                text: "Satna",
                link: "https://www.swiggy.com/city/satna",
              },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              {
                text: "Valsad",
                link: "https://www.swiggy.com/city/valsad",
              },
              {
                text: "Vapi",
                link: "https://www.swiggy.com/city/vapi",
              },
              {
                text: "Chhapra",
                link: "https://www.swiggy.com/city/chhapra",
              },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              {
                text: "Kollam",
                link: "https://www.swiggy.com/city/kollam",
              },
              {
                text: "Silchar",
                link: "https://www.swiggy.com/city/silchar",
              },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              {
                text: "Sonipat",
                link: "https://www.swiggy.com/city/sonipat",
              },
              {
                text: "Rohtak",
                link: "https://www.swiggy.com/city/rohtak",
              },
              {
                text: "Mehsana",
                link: "https://www.swiggy.com/city/mehsana",
              },
              {
                text: "Kullu",
                link: "https://www.swiggy.com/city/kullu",
              },
              {
                text: "Dhule",
                link: "https://www.swiggy.com/city/dhule",
              },
              {
                text: "Dharwad",
                link: "https://www.swiggy.com/city/dharwad",
              },
              {
                text: "Latur",
                link: "https://www.swiggy.com/city/latur",
              },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              {
                text: "Khammam",
                link: "https://www.swiggy.com/city/khammam",
              },
              {
                text: "Hampi",
                link: "https://www.swiggy.com/city/hampi",
              },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              {
                text: "Akola",
                link: "https://www.swiggy.com/city/akola",
              },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              {
                text: "Gaya",
                link: "https://www.swiggy.com/city/gaya",
              },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              {
                text: "Dewas",
                link: "https://www.swiggy.com/city/dewas",
              },
              {
                text: "Korba",
                link: "https://www.swiggy.com/city/korba",
              },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              {
                text: "Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon",
              },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              {
                text: "Hapur",
                link: "https://www.swiggy.com/city/hapur",
              },
              {
                text: "Morena",
                link: "https://www.swiggy.com/city/morena",
              },
              {
                text: "Hassan",
                link: "https://www.swiggy.com/city/hassan",
              },
              {
                text: "Hisar",
                link: "https://www.swiggy.com/city/hisar",
              },
              {
                text: "Godhra",
                link: "https://www.swiggy.com/city/godhra",
              },
              {
                text: "Kolar ",
                link: "https://www.swiggy.com/city/kolar",
              },
              {
                text: "Rampur",
                link: "https://www.swiggy.com/city/rampur",
              },
              {
                text: "Sitapur",
                link: "https://www.swiggy.com/city/sitapur",
              },
              {
                text: "Etawah",
                link: "https://www.swiggy.com/city/etawah",
              },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              {
                text: "Nadiad",
                link: "https://www.swiggy.com/city/nadiad",
              },
              {
                text: "Sagar",
                link: "https://www.swiggy.com/city/sagar",
              },
              {
                text: "Morbi",
                link: "https://www.swiggy.com/city/morbi",
              },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              {
                text: "Katni",
                link: "https://www.swiggy.com/city/katni",
              },
              {
                text: "Khandwa",
                link: "https://www.swiggy.com/city/khandwa",
              },
              {
                text: "Eluru",
                link: "https://www.swiggy.com/city/eluru",
              },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              {
                text: "Deoghar",
                link: "https://www.swiggy.com/city/deoghar",
              },
              {
                text: "Khanna",
                link: "https://www.swiggy.com/city/khanna",
              },
              {
                text: "Bidar",
                link: "https://www.swiggy.com/city/bidar",
              },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              {
                text: "Beed",
                link: "https://www.swiggy.com/city/beed",
              },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              {
                text: "Asansol",
                link: "https://www.swiggy.com/city/asansol",
              },
              {
                text: "Beawar",
                link: "https://www.swiggy.com/city/beawar",
              },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              {
                text: "Gondia",
                link: "https://www.swiggy.com/city/gondia",
              },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              {
                text: "Jalna",
                link: "https://www.swiggy.com/city/jalna",
              },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              {
                text: "Moga",
                link: "https://www.swiggy.com/city/moga",
              },
              {
                text: "Abohar",
                link: "https://www.swiggy.com/city/abohar",
              },
              {
                text: "Adoni",
                link: "https://www.swiggy.com/city/adoni",
              },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              {
                text: "Satara",
                link: "https://www.swiggy.com/city/satara",
              },
              {
                text: "Ambur",
                link: "https://www.swiggy.com/city/ambur",
              },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              {
                text: "Ratlam",
                link: "https://www.swiggy.com/city/ratlam",
              },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              {
                text: "Ongole",
                link: "https://www.swiggy.com/city/ongole",
              },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              {
                text: "Unnao",
                link: "https://www.swiggy.com/city/unnao",
              },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              {
                text: "Pali",
                link: "https://www.swiggy.com/city/pali",
              },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              {
                text: "Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani",
              },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              {
                text: "Kaithal",
                link: "https://www.swiggy.com/city/kaithal",
              },
              {
                text: "Jagtial",
                link: "https://www.swiggy.com/city/jagtial",
              },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              {
                text: "Guna",
                link: "https://www.swiggy.com/city/guna",
              },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              {
                text: "Orai",
                link: "https://www.swiggy.com/city/orai",
              },
              {
                text: "Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak",
              },
              {
                text: "Batala",
                link: "https://www.swiggy.com/city/batala",
              },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              {
                text: "Barnala",
                link: "https://www.swiggy.com/city/barnala",
              },
              {
                text: "Raigarh",
                link: "https://www.swiggy.com/city/raigarh",
              },
              {
                text: "Nagaon",
                link: "https://www.swiggy.com/city/nagaon",
              },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              {
                text: "Giridih",
                link: "https://www.swiggy.com/city/giridih",
              },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              {
                text: "Vidisha",
                link: "https://www.swiggy.com/city/vidisha",
              },
              {
                text: "Dimapur",
                link: "https://www.swiggy.com/city/dimapur",
              },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              {
                text: "Imphal",
                link: "https://www.swiggy.com/city/imphal",
              },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              {
                text: "Hardoi",
                link: "https://www.swiggy.com/city/hardoi",
              },
              {
                text: "Basti",
                link: "https://www.swiggy.com/city/basti",
              },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              {
                text: "Hospet",
                link: "https://www.swiggy.com/city/hospet",
              },
              {
                text: "Budaun",
                link: "https://www.swiggy.com/city/budaun",
              },
              {
                text: "Neemuch",
                link: "https://www.swiggy.com/city/neemuch",
              },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              {
                text: "Barshi",
                link: "https://www.swiggy.com/city/barshi",
              },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              {
                text: "Wardha",
                link: "https://www.swiggy.com/city/wardha",
              },
              {
                text: "Sehore",
                link: "https://www.swiggy.com/city/sehore",
              },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              {
                text: "Puri",
                link: "https://www.swiggy.com/city/puri",
              },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              {
                text: "Bhuj",
                link: "https://www.swiggy.com/city/bhuj",
              },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              {
                text: "Bharuch",
                link: "https://www.swiggy.com/city/bharuch",
              },
              {
                text: "Navsari",
                link: "https://www.swiggy.com/city/navsari",
              },
              {
                text: "Amreli",
                link: "https://www.swiggy.com/city/amreli",
              },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              {
                text: "Sikar",
                link: "https://www.swiggy.com/city/sikar",
              },
              {
                text: "Churu",
                link: "https://www.swiggy.com/city/churu",
              },
              {
                text: "Alwar",
                link: "https://www.swiggy.com/city/alwar",
              },
              {
                text: "Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi",
              },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              {
                text: "Bundi",
                link: "https://www.swiggy.com/city/bundi",
              },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              {
                text: "Purulia",
                link: "https://www.swiggy.com/city/purulia",
              },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              {
                text: "Dholpur",
                link: "https://www.swiggy.com/city/dholpur",
              },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              {
                text: "Bongaon",
                link: "https://www.swiggy.com/city/bongaon",
              },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              {
                text: "Habra",
                link: "https://www.swiggy.com/city/habra",
              },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              {
                text: "Bijapur",
                link: "https://www.swiggy.com/city/bijapur",
              },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              {
                text: "Raichur",
                link: "https://www.swiggy.com/city/raichur",
              },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              {
                text: "Jind",
                link: "https://www.swiggy.com/city/jind",
              },
              {
                text: "Rewari",
                link: "https://www.swiggy.com/city/rewari",
              },
              {
                text: "Palwal",
                link: "https://www.swiggy.com/city/palwal",
              },
              {
                text: "Hathras",
                link: "https://www.swiggy.com/city/hathras",
              },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              {
                text: "Banda",
                link: "https://www.swiggy.com/city/banda",
              },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              {
                text: "Gonda",
                link: "https://www.swiggy.com/city/gonda",
              },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              {
                text: "Nagda",
                link: "https://www.swiggy.com/city/nagda",
              },
              {
                text: "Raiganj",
                link: "https://www.swiggy.com/city/raiganj",
              },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              {
                text: "Shamli",
                link: "https://www.swiggy.com/city/shamli",
              },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              {
                text: "Ballia",
                link: "https://www.swiggy.com/city/ballia",
              },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              {
                text: "Etah",
                link: "https://www.swiggy.com/city/etah",
              },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              {
                text: "Haldia",
                link: "https://www.swiggy.com/city/haldia",
              },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              {
                text: "Udgir",
                link: "https://www.swiggy.com/city/udgir",
              },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              {
                text: "Bhind",
                link: "https://www.swiggy.com/city/bhind",
              },
              {
                text: "Mandya",
                link: "https://www.swiggy.com/city/mandya",
              },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              {
                text: "Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur",
              },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              {
                text: "Jorhat",
                link: "https://www.swiggy.com/city/jorhat",
              },
              {
                text: "Nandyal",
                link: "https://www.swiggy.com/city/nandyal",
              },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              {
                text: "Buxar",
                link: "https://www.swiggy.com/city/buxar",
              },
              {
                text: "Siwan",
                link: "https://www.swiggy.com/city/siwan",
              },
              {
                text: "Dehri",
                link: "https://www.swiggy.com/city/dehri",
              },
              {
                text: "Bettiah",
                link: "https://www.swiggy.com/city/bettiah",
              },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              {
                text: "Saharsa",
                link: "https://www.swiggy.com/city/saharsa",
              },
              {
                text: "Hajipur",
                link: "https://www.swiggy.com/city/hajipur",
              },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              {
                text: "Sasaram",
                link: "https://www.swiggy.com/city/sasaram",
              },
              {
                text: "Munger",
                link: "https://www.swiggy.com/city/munger",
              },
              {
                text: "Katihar",
                link: "https://www.swiggy.com/city/katihar",
              },
              {
                text: "Arrah",
                link: "https://www.swiggy.com/city/arrah",
              },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              {
                text: "Neyveli",
                link: "https://www.swiggy.com/city/neyveli",
              },
              {
                text: "Waidhan",
                link: "https://www.swiggy.com/city/waidhan",
              },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              {
                text: "Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal",
              },
              {
                text: "Gokak",
                link: "https://www.swiggy.com/city/gokak",
              },
              {
                text: "Itarsi",
                link: "https://www.swiggy.com/city/itarsi",
              },
              {
                text: "Dhar",
                link: "https://www.swiggy.com/city/dhar",
              },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              {
                text: "Gadwal",
                link: "https://www.swiggy.com/city/gadwal",
              },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              {
                text: "Sangrur",
                link: "https://www.swiggy.com/city/sangrur",
              },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              {
                text: "Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh",
              },
              {
                text: "Bantwal",
                link: "https://www.swiggy.com/city/bantwal",
              },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              {
                text: "Buldana",
                link: "https://www.swiggy.com/city/buldana",
              },
              {
                text: "Karad",
                link: "https://www.swiggy.com/city/karad",
              },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              {
                text: "Tiptur",
                link: "https://www.swiggy.com/city/tiptur",
              },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              {
                text: "Malout",
                link: "https://www.swiggy.com/city/malout",
              },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              {
                text: "Ropar",
                link: "https://www.swiggy.com/city/ropar",
              },
              {
                text: "Nangal",
                link: "https://www.swiggy.com/city/nangal",
              },
              {
                text: "Narnaul",
                link: "https://www.swiggy.com/city/narnaul",
              },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              {
                text: "Dausa",
                link: "https://www.swiggy.com/city/dausa",
              },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              {
                text: "Purnea",
                link: "https://www.swiggy.com/city/purnea",
              },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              {
                text: "Malda",
                link: "https://www.swiggy.com/city/malda",
              },
              {
                text: "Tuni",
                link: "https://www.swiggy.com/city/tuni",
              },
              {
                text: "Puttur",
                link: "https://www.swiggy.com/city/puttur",
              },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              {
                text: "Nirmal",
                link: "https://www.swiggy.com/city/nirmal",
              },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              {
                text: "Tanuku",
                link: "https://www.swiggy.com/city/tanuku",
              },
              {
                text: "Dahod",
                link: "https://www.swiggy.com/city/dahod",
              },
              {
                text: "Barmer",
                link: "https://www.swiggy.com/city/barmer",
              },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              {
                text: "Nakodar",
                link: "https://www.swiggy.com/city/nakodar",
              },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              {
                text: "Vyara",
                link: "https://www.swiggy.com/city/vyara",
              },
              {
                text: "Bardoli",
                link: "https://www.swiggy.com/city/bardoli",
              },
              {
                text: "Halol",
                link: "https://www.swiggy.com/city/halol",
              },
              {
                text: "Bijnor",
                link: "https://www.swiggy.com/city/bijnor",
              },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              {
                text: "Betul",
                link: "https://www.swiggy.com/city/betul",
              },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              {
                text: "Sirsi",
                link: "https://www.swiggy.com/city/sirsi",
              },
              {
                text: "Theni",
                link: "https://www.swiggy.com/city/theni",
              },
              {
                text: "Karur",
                link: "https://www.swiggy.com/city/karur",
              },
              {
                text: "Karwar",
                link: "https://www.swiggy.com/city/karwar",
              },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              {
                text: "Kannur",
                link: "https://www.swiggy.com/city/kannur",
              },
              {
                text: "Noida 1",
                link: "https://www.swiggy.com/city/noida-1",
              },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              {
                text: "Kadiri",
                link: "https://www.swiggy.com/city/kadiri",
              },
              {
                text: "Kavali",
                link: "https://www.swiggy.com/city/kavali",
              },
              {
                text: "Tezpur",
                link: "https://www.swiggy.com/city/tezpur",
              },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              {
                text: "Jagraon",
                link: "https://www.swiggy.com/city/jagraon",
              },
              {
                text: "Mansa",
                link: "https://www.swiggy.com/city/mansa",
              },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              {
                text: "Fazilka",
                link: "https://www.swiggy.com/city/fazilka",
              },
              {
                text: "Baddi",
                link: "https://www.swiggy.com/city/baddi",
              },
              {
                text: "Solan",
                link: "https://www.swiggy.com/city/solan",
              },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              {
                text: "Hansi",
                link: "https://www.swiggy.com/city/hansi",
              },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              {
                text: "Tohana",
                link: "https://www.swiggy.com/city/tohana",
              },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              {
                text: "Veraval",
                link: "https://www.swiggy.com/city/veraval",
              },
              {
                text: "Daman",
                link: "https://www.swiggy.com/city/daman",
              },
              {
                text: "Chiplun",
                link: "https://www.swiggy.com/city/chiplun",
              },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              {
                text: "Lonavla",
                link: "https://www.swiggy.com/city/lonavla",
              },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              {
                text: "Bolpur",
                link: "https://www.swiggy.com/city/bolpur",
              },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              {
                text: "Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar",
              },
              {
                text: "Koppal",
                link: "https://www.swiggy.com/city/koppal",
              },
              {
                text: "Chikhli",
                link: "https://www.swiggy.com/city/chikhli",
              },
              {
                text: "Dahanu",
                link: "https://www.swiggy.com/city/dahanu",
              },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              {
                text: "Rangpo",
                link: "https://www.swiggy.com/city/rangpo",
              },
              {
                text: "Aizawl",
                link: "https://www.swiggy.com/city/aizawl",
              },
              {
                text: "Gangtok",
                link: "https://www.swiggy.com/city/gangtok",
              },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              {
                text: "Kannauj",
                link: "https://www.swiggy.com/city/kannauj",
              },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              {
                text: "Palani",
                link: "https://www.swiggy.com/city/palani",
              },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              {
                text: "Boisar",
                link: "https://www.swiggy.com/city/boisar",
              },
              {
                text: "Kohima",
                link: "https://www.swiggy.com/city/kohima",
              },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              {
                text: "Dumka",
                link: "https://www.swiggy.com/city/dumka",
              },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              {
                text: "Baran",
                link: "https://www.swiggy.com/city/baran",
              },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              {
                text: "Pusad",
                link: "https://www.swiggy.com/city/pusad",
              },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              {
                text: "Manali",
                link: "https://www.swiggy.com/city/manali",
              },
              {
                text: "Diu",
                link: "https://www.swiggy.com/city/diu",
              },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              {
                text: "Almora",
                link: "https://www.swiggy.com/city/almora",
              },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              {
                text: "Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi",
              },
              {
                text: "Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi",
              },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              {
                text: "Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh",
              },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              {
                text: "Washim",
                link: "https://www.swiggy.com/city/washim",
              },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              {
                text: "Suri",
                link: "https://www.swiggy.com/city/suri",
              },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              {
                text: "Wayanad",
                link: "https://www.swiggy.com/city/wayanad",
              },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              {
                text: "Mahoba",
                link: "https://www.swiggy.com/city/mahoba",
              },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              {
                text: "Sirkali",
                link: "https://www.swiggy.com/city/sirkali",
              },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              {
                text: "Digboi",
                link: "https://www.swiggy.com/city/digboi",
              },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              {
                text: "Nalbari",
                link: "https://www.swiggy.com/city/nalbari",
              },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              {
                text: "Hosur",
                link: "https://www.swiggy.com/city/hosur",
              },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              {
                text: "Barh",
                link: "https://www.swiggy.com/city/barh",
              },
              {
                text: "Palghar",
                link: "https://www.swiggy.com/city/palghar",
              },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              {
                text: "Haveri",
                link: "https://www.swiggy.com/city/haveri",
              },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              {
                text: "Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar",
              },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              {
                text: "Rangia",
                link: "https://www.swiggy.com/city/rangia",
              },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              {
                text: "Una",
                link: "https://www.swiggy.com/city/una",
              },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              {
                text: "Jamui",
                link: "https://www.swiggy.com/city/jamui",
              },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              {
                text: "Araria",
                link: "https://www.swiggy.com/city/araria",
              },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              {
                text: "Hojai",
                link: "https://www.swiggy.com/city/hojai",
              },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              {
                text: "Dasuya",
                link: "https://www.swiggy.com/city/dasuya",
              },
              {
                text: "Gudur",
                link: "https://www.swiggy.com/city/gudur",
              },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              {
                text: "Piler",
                link: "https://www.swiggy.com/city/piler",
              },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              {
                text: "Nabha",
                link: "https://www.swiggy.com/city/nabha",
              },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              {
                text: "Roha",
                link: "https://www.swiggy.com/city/roha",
              },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "bangalore",
            lat: "12.9351929",
            lng: "77.62448069999999",
            userAgent:
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-2922df6c-6486-44b5-b7b8-03d3213121a1","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "790b1544-6bcf-49ab-bbb7-127c0d3996ec",
  sid: "fix87cd4-6ed7-447a-8437-849e758f3f92",
  deviceId: "a893d774-560d-28da-28df-39d63abbb9fc",
  csrfToken: null,
};
