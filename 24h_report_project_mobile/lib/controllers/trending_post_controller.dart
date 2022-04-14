import 'package:crime_reported_project/model/post_model.dart';
import 'package:get/get.dart';

import '../data/repository/trending_post_repo.dart';

class TrendingPostController extends GetxController {
  final TrendingPostRepo trendingPostRepo;
  TrendingPostController({required this.trendingPostRepo});
  List<dynamic> _trendingPostList = [];
  List<dynamic> get trendingPostList => _trendingPostList;
  bool _isLoaded = false;
  bool get isLoaded => _isLoaded;
  //
  Future<void> getTrendingPostList() async {
    Response response = await trendingPostRepo.getTrendingPostList();
    if (response.statusCode == 200) {
      print("Got trending posts");
      _trendingPostList = [];
      _trendingPostList.addAll(Post.fromJson(response.body).posts);
      _isLoaded = true;
      update(); //setState()
    } else {}
  }

  void setQuantity(bool isIncrement) {}
}
