import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';
import 'package:get/get_navigation/src/routes/get_route.dart';

import '../pages/home/home_page.dart';
import '../pages/map/map_page.dart';
import '../pages/splash/splash_page.dart';

class RoutesHelper {
  static const String splashPage = "/splash-page";
  static const String initial = "/";
  static const String mapPage = "/map-page";
  static const String trendingPost = "/trending-post";
  static const String post = "/post";

  static String getSplashPage() => '$splashPage';
  static String getInitial() => '$initial';
  static String getMapPage() => '$mapPage';
  static String getTrendingPost(int pageId) => '$trendingPost?pageId=$pageId';
  static String getPost(int pageId) => '$post?pageId=$pageId';

  //list
  static List<GetPage> routes = [
    GetPage(name: splashPage, page: () => SplashScreen()),
    GetPage(name: initial, page: () => HomePage()),
    GetPage(name: mapPage, page: () => MapPage()),
    GetPage(
      name: trendingPost,
      page: () {
        var pageId = Get.parameters['pageId'];
        // return TrendingPostDetail(pageId: int.parse(pageId!));
        return Container();
      },
      transitionDuration: Duration(milliseconds: 250),
      transition: Transition.downToUp,
    ),
    GetPage(
      name: post,
      page: () {
        var pageId = Get.parameters['pageId'];
        // return TrendingPostDetail(pageId: int.parse(pageId!));
        return Container();
      },
      transitionDuration: Duration(milliseconds: 250),
      transition: Transition.downToUp,
    ),
  ];
}
