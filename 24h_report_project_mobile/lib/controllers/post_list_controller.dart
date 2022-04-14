import 'package:crime_reported_project/model/post_model.dart';
import 'package:get/get.dart';

import '../data/repository/post_list_repo.dart';

class PostListController extends GetxController {
  final PostListRepo postListRepo;
  PostListController({required this.postListRepo});
  List<dynamic> _postList = [];
  List<dynamic> get postList => _postList;
  bool _isLoaded = false;
  bool get isLoaded => _isLoaded;
  //
  Future<void> getPostList() async {
    Response response = await postListRepo.getPostListList();
    if (response.statusCode == 200) {
      print("Got post list");
      _postList = [];
      _postList.addAll(Post.fromJson(response.body).posts);
      _isLoaded = true;
      update(); //setState()
    } else {
      print("Can not get");
    }
  }
}
