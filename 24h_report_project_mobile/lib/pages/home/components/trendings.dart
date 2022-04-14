import 'package:crime_reported_project/main.dart';
import 'package:crime_reported_project/model/post_model.dart';
import 'package:dots_indicator/dots_indicator.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../controllers/trending_post_controller.dart';
import '../../../routes/routes_helper.dart';
import '../../../utils/app_constants.dart';
import '../../../utils/colors.dart';
import '../../../utils/dimension.dart';
import '../../../widgets/app_column.dart';

class TrendingsComponent extends StatefulWidget {
  const TrendingsComponent({Key? key}) : super(key: key);

  @override
  State<TrendingsComponent> createState() => _TrendingsComponentState();
}

class _TrendingsComponentState extends State<TrendingsComponent> {
  late bool _isLightMode;

  PageController pageController = PageController(viewportFraction: 0.85);
  var _currentPageValue = 0.0;
  final double _scaleFactor = 0.8;
  final double _height = Dimension.pageViewContainer;
  //

  @override
  void initState() {
    super.initState();
    pageController.addListener(() {
      setState(() {
        _currentPageValue = pageController.page!;
        // print("page:" + _currentPageValue.toString());
      });
    });
    _getTheme();
  }

  _getTheme() {
    setState(() {
      _isLightMode = MyApp.themeNotifier.value == ThemeMode.light;
    });
  }

  @override
  void dispose() {
    pageController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: Dimension.screenWidth,
      height: Dimension.height45 * 8,
      child: Column(
        children: [
          GetBuilder<TrendingPostController>(builder: (trendingPosts) {
            return trendingPosts.isLoaded
                ? Container(
                    height: Dimension.pageView,
                    child: PageView.builder(
                        controller: pageController,
                        itemCount: trendingPosts.trendingPostList.length,
                        itemBuilder: (context, position) {
                          return _buildPageItem(position,
                              trendingPosts.trendingPostList[position]);
                        }))
                : CircularProgressIndicator(
                    color: AppColors.mainColor,
                  );
          }),
          GetBuilder<TrendingPostController>(builder: (trendingPosts) {
            return DotsIndicator(
              dotsCount: trendingPosts.trendingPostList.isEmpty
                  ? 1
                  : trendingPosts.trendingPostList.length,
              position: _currentPageValue,
              decorator: DotsDecorator(
                activeColor: AppColors.mainColor,
                size: const Size.square(9.0),
                activeSize: const Size(18.0, 9.0),
                activeShape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5.0)),
              ),
            );
          }),
        ],
      ),
    );
  }

  Widget _buildPageItem(int index, PostModel trendingPost) {
    Matrix4 matrix = new Matrix4.identity();
    //
    if (index == _currentPageValue.floor()) {
      var currScale = 1 - (_currentPageValue - index) * (1 - _scaleFactor);
      var currTrans = _height * (1 - currScale) / 2;
      matrix = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    } else if (index == _currentPageValue.floor() + 1) {
      var currScale =
          _scaleFactor + (_currentPageValue - index + 1) * (1 - _scaleFactor);
      var currTrans = _height * (1 - currScale) / 2;
      matrix = Matrix4.diagonal3Values(1, currScale, 1);
      matrix = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    } else {
      var currScale = 0.8;
      matrix = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, _height * (1 - _scaleFactor), 0);
    }

    //
    return Transform(
      transform: matrix,
      child: Stack(
        children: [
          GestureDetector(
            onTap: () {
              Get.toNamed(RoutesHelper.getTrendingPost(index));
            },
            child: Container(
              height: Dimension.pageViewContainer,
              margin: EdgeInsets.only(left: 5, right: 5),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(Dimension.radius15),
                  color: index.isEven ? Color(0xFF69c5df) : Color(0xFF9294cc),
                  image: DecorationImage(
                      fit: BoxFit.cover,
                      image: NetworkImage(AppConstants.BASE_URL +
                          AppConstants.UPLOAD_URL +
                          trendingPost.img!))),
            ),
          ),
          Align(
            alignment: Alignment.bottomLeft,
            widthFactor: Dimension.screenWidth,
            child: Container(
              height: Dimension.pageViewTextContainer / 1.4,
              margin: EdgeInsets.only(
                  left: 5,
                  right: Dimension.width10,
                  bottom: Dimension.height30),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  topRight: Radius.circular(Dimension.radius20),
                  bottomRight: Radius.circular(Dimension.radius20),
                ),
                color: Colors.black.withOpacity(0.7),
              ),
              child: Container(
                padding: EdgeInsets.only(
                    top: Dimension.height10 / 2,
                    bottom: Dimension.height10 / 2,
                    left: Dimension.height10,
                    right: Dimension.height10),
                child: AppColumn(
                  text: trendingPost.name!,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
