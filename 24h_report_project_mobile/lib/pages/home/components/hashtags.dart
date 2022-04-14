import 'package:crime_reported_project/utils/dimension.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hashtagable/widgets/hashtag_text.dart';

class HashTagsComponent extends StatefulWidget {
  const HashTagsComponent({Key? key}) : super(key: key);

  @override
  State<HashTagsComponent> createState() => _HashTagsComponentState();
}

class _HashTagsComponentState extends State<HashTagsComponent> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Wrap(
        children: [
          Container(
            margin: EdgeInsets.all(Dimension.width10 / 2),
            padding: EdgeInsets.all(Dimension.width10 / 2),
            decoration: BoxDecoration(
              color: Colors.lightBlueAccent.withOpacity(0.3),
              border: Border.all(color: Colors.lightBlue, width: 2),
              borderRadius:
                  BorderRadius.all(Radius.circular(Dimension.radius15 / 2)),
            ),
            child: HashTagText(
              text: "#F88",
              basicStyle: TextStyle(fontSize: 16, color: Colors.black),
              decoratedStyle: TextStyle(fontSize: 16, color: Colors.blueAccent),
              textAlign: TextAlign.center,
              onTap: (text) {
                ///do something on Tap
              },
            ),
          ),
          Container(
            margin: EdgeInsets.all(Dimension.width10 / 2),
            padding: EdgeInsets.all(Dimension.width10 / 2),
            decoration: BoxDecoration(
              color: Colors.lightBlueAccent.withOpacity(0.3),
              border: Border.all(color: Colors.lightBlue, width: 2),
              borderRadius:
                  BorderRadius.all(Radius.circular(Dimension.radius15 / 2)),
            ),
            child: HashTagText(
              text: "#Zalo",
              basicStyle: TextStyle(fontSize: 16, color: Colors.black),
              decoratedStyle: TextStyle(fontSize: 16, color: Colors.blueAccent),
              textAlign: TextAlign.center,
              onTap: (text) {
                ///do something on Tap
              },
            ),
          ),
          Container(
            margin: EdgeInsets.all(Dimension.width10 / 2),
            padding: EdgeInsets.all(Dimension.width10 / 2),
            decoration: BoxDecoration(
              color: Colors.lightBlueAccent.withOpacity(0.3),
              border: Border.all(color: Colors.lightBlue, width: 2),
              borderRadius:
                  BorderRadius.all(Radius.circular(Dimension.radius15 / 2)),
            ),
            child: HashTagText(
              text: "#SOS",
              basicStyle: TextStyle(fontSize: 16, color: Colors.black),
              decoratedStyle: TextStyle(fontSize: 16, color: Colors.blueAccent),
              textAlign: TextAlign.center,
              onTap: (text) {
                ///do something on Tap
              },
            ),
          ),
          Container(
            margin: EdgeInsets.all(Dimension.width10 / 2),
            padding: EdgeInsets.all(Dimension.width10 / 2),
            decoration: BoxDecoration(
              color: Colors.lightBlueAccent.withOpacity(0.3),
              border: Border.all(color: Colors.lightBlue, width: 2),
              borderRadius:
                  BorderRadius.all(Radius.circular(Dimension.radius15 / 2)),
            ),
            child: HashTagText(
              text: "#LiveStream",
              basicStyle: TextStyle(fontSize: 16, color: Colors.black),
              decoratedStyle: TextStyle(fontSize: 16, color: Colors.blueAccent),
              textAlign: TextAlign.center,
              onTap: (text) {
                ///do something on Tap
              },
            ),
          ),
          Container(
            margin: EdgeInsets.all(Dimension.width10 / 2),
            padding: EdgeInsets.all(Dimension.width10 / 2),
            decoration: BoxDecoration(
              color: Colors.lightBlueAccent.withOpacity(0.3),
              border: Border.all(color: Colors.lightBlue, width: 2),
              borderRadius:
                  BorderRadius.all(Radius.circular(Dimension.radius15 / 2)),
            ),
            child: HashTagText(
              text: "#PiNetwork",
              basicStyle: TextStyle(fontSize: 16, color: Colors.black),
              decoratedStyle: TextStyle(fontSize: 16, color: Colors.blueAccent),
              textAlign: TextAlign.center,
              onTap: (text) {
                ///do something on Tap
              },
            ),
          ),
          // HashTagTextField(
          //   basicStyle: TextStyle(fontSize: 15, color: Colors.black),
          //   decoratedStyle: TextStyle(fontSize: 15, color: Colors.blue),
          //   keyboardType: TextInputType.multiline,
          //
          //   /// Called when detection (word starts with #, or # and @) is being typed
          //   onDetectionTyped: (text) {
          //     print(text);
          //   },
          //
          //   /// Called when detection is fully typed
          //   onDetectionFinished: () {
          //     print("detection finished");
          //   },
          //   maxLines: null,
          // )
        ],
      ),
    );
  }
}
