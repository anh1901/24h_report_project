import 'package:flutter/cupertino.dart';

class WhatsNewComponent extends StatefulWidget {
  const WhatsNewComponent({Key? key}) : super(key: key);

  @override
  State<WhatsNewComponent> createState() => _WhatsNewComponentState();
}

class _WhatsNewComponentState extends State<WhatsNewComponent> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Chưa biết để gì...'),
    );
  }
}
