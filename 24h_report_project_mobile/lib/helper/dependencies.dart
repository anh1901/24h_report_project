import 'package:get/get.dart';

import '../controllers/post_list_controller.dart';
import '../controllers/trending_post_controller.dart';
import '../data/api/api_client.dart';
import '../data/repository/post_list_repo.dart';
import '../data/repository/trending_post_repo.dart';
import '../utils/app_constants.dart';

Future<void> init() async {
  //api client
  Get.lazyPut(() => ApiClient(appBaseUrl: AppConstants.BASE_URL));
  //repos
  Get.lazyPut(() => TrendingPostRepo(apiClient: Get.find()));
  Get.lazyPut(() => PostListRepo(apiClient: Get.find()));
  //controller
  Get.lazyPut(() => TrendingPostController(trendingPostRepo: Get.find()));
  Get.lazyPut(() => PostListController(postListRepo: Get.find()));
}
