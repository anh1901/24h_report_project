import 'package:crime_reported_project/controllers/post_list_controller.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_state_manager/src/simple/get_state.dart';
import 'package:hashtagable/widgets/hashtag_text.dart';

import '../../../routes/routes_helper.dart';
import '../../../utils/app_constants.dart';
import '../../../utils/colors.dart';
import '../../../utils/dimension.dart';
import '../../../widgets/big_text.dart';
import '../../../widgets/icon_and_text.dart';

class PostsListComponent extends StatefulWidget {
  const PostsListComponent({Key? key}) : super(key: key);

  @override
  State<PostsListComponent> createState() => _PostsListComponentState();
}

class _PostsListComponentState extends State<PostsListComponent> {
  @override
  Widget build(BuildContext context) {
    return GetBuilder<PostListController>(builder: (postList) {
      return postList.isLoaded
          ? ListView.builder(
              physics: NeverScrollableScrollPhysics(),
              shrinkWrap: true,
              itemCount: postList.postList.length,
              itemBuilder: (context, index) {
                return GestureDetector(
                  onTap: () {
                    Get.toNamed(RoutesHelper.getTrendingPost(index));
                  },
                  child: Container(
                    margin: EdgeInsets.only(
                      left: Dimension.width10,
                      right: Dimension.width10,
                      bottom: Dimension.height10,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        //image
                        Container(
                          width: Dimension.listViewImgSize,
                          height: Dimension.listViewImgSize,
                          decoration: BoxDecoration(
                              borderRadius:
                                  BorderRadius.circular(Dimension.radius20),
                              color: Colors.white38,
                              image: DecorationImage(
                                  fit: BoxFit.cover,
                                  image: NetworkImage(AppConstants.BASE_URL +
                                      AppConstants.UPLOAD_URL +
                                      postList.postList[index].img!))),
                        ),
                        SizedBox(
                          height: Dimension.height10 / 2,
                        ),
                        //text section
                        Container(
                          constraints: const BoxConstraints(
                            maxHeight: double.infinity,
                          ),
                          margin: EdgeInsets.only(bottom: Dimension.height30),
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.all(
                                  Radius.circular(Dimension.radius15)),
                              color: Colors.white),
                          child: Padding(
                            padding: EdgeInsets.only(
                                top: Dimension.height10,
                                bottom: Dimension.height10,
                                left: Dimension.width20,
                                right: Dimension.width20),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Row(
                                      children: [
                                        ClipRRect(
                                          borderRadius: BorderRadius.circular(
                                              50.0), //or 15.0
                                          child: Container(
                                            height: Dimension.height30,
                                            width: Dimension.height30,
                                            color: Color(0xffFF0E58),
                                            child: Image.asset(
                                                'assets/image/sos.png'),
                                          ),
                                        ),
                                        SizedBox(
                                          width: Dimension.width10,
                                        ),
                                        BigText(
                                            text:
                                                postList.postList[index].name!),
                                      ],
                                    ),
                                    Icon(Icons.more_vert),
                                  ],
                                ),
                                SizedBox(
                                  height: Dimension.width10,
                                ),
                                Wrap(
                                  children: [
                                    HashTagText(
                                      text: "#Verified",
                                      basicStyle: const TextStyle(
                                          fontSize: 16, color: Colors.black),
                                      decoratedStyle: const TextStyle(
                                          fontSize: 16, color: Colors.red),
                                      textAlign: TextAlign.center,
                                      onTap: (text) {
                                        ///do something on Tap
                                      },
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: Dimension.height10,
                                ),
                                Text(
                                  postList.postList[index].description!,
                                  style: TextStyle(color: Colors.black),
                                ),
                                SizedBox(
                                  height: Dimension.height10,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    IconAndTextWidget(
                                        icon: CupertinoIcons.hand_thumbsup,
                                        text: "124",
                                        iconColor: AppColors.mainBlackColor),
                                    IconAndTextWidget(
                                        icon: Icons.comment,
                                        text: "432 Comments",
                                        iconColor: AppColors.mainColor),
                                    IconAndTextWidget(
                                        icon: CupertinoIcons
                                            .arrowshape_turn_up_left,
                                        text: "Share",
                                        iconColor: AppColors.iconColor2),
                                  ],
                                )
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              })
          : CircularProgressIndicator(
              color: AppColors.mainColor,
            );
    });
  }
}
