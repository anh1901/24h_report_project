import 'package:crime_reported_project/controllers/post_list_controller.dart';
import 'package:crime_reported_project/routes/routes_helper.dart';
import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';

import 'controllers/trending_post_controller.dart';
import 'helper/dependencies.dart' as dep;

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dep.init();
  runApp(
    DevicePreview(
      // enabled: kIsWeb ? false : !kReleaseMode,
      enabled: false,
      builder: (_) => MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  static final ValueNotifier<ThemeMode> themeNotifier =
      ValueNotifier(ThemeMode.light);

  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ///Lấy API từ main
    Get.find<TrendingPostController>().getTrendingPostList();
    Get.find<PostListController>().getPostList();
    return ValueListenableBuilder<ThemeMode>(
        valueListenable: themeNotifier,
        builder: (_, ThemeMode currentMode, __) {
          return GetMaterialApp(
            useInheritedMediaQuery: true,
            debugShowCheckedModeBanner: false,
            locale: DevicePreview.locale(context),
            theme: ThemeData(primarySwatch: Colors.amber),
            darkTheme: ThemeData.dark(),
            themeMode: currentMode,
            title: 'Crime Alert',
            initialRoute: RoutesHelper.getSplashPage(),
            getPages: RoutesHelper.routes,
          );
        });
  }
}

// return GetBuilder<PopularProductController>(
// builder: (_) {
// return GetBuilder<RecommendedProductController>(builder: (_) {
// return GetMaterialApp(
// debugShowCheckedModeBanner: false,
// title: 'Crime Alert',
// initialRoute: RoutesHelper.getSplashPage(),
// getPages: RoutesHelper.routes,
// );
// //home:SplashScreen(),
// });
// },
// );
