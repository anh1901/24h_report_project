import 'package:get/get.dart';

import '../../utils/app_constants.dart';
import '../api/api_client.dart';

class TrendingPostRepo extends GetxService {
  final ApiClient apiClient;
  TrendingPostRepo({required this.apiClient});
  //get
  Future<Response> getTrendingPostList() async {
    return await apiClient.getData(AppConstants.POPULAR_PRODUCT_URI);
  }
}
