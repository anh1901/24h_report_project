import 'package:get/get.dart';

import '../../utils/app_constants.dart';
import '../api/api_client.dart';

class PostListRepo extends GetxService {
  final ApiClient apiClient;
  PostListRepo({required this.apiClient});
  //get
  Future<Response> getPostListList() async {
    return await apiClient.getData(AppConstants.RECOMMENDED_PRODUCT_URI);
  }
}
