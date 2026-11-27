import '@/global.css';

import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { lessons, upcomingLessons } from '@/lessons';

export default function LessonsScreen() {
  const [lessonId, setLessonId] = useState(lessons[0].id);
  const [exampleId, setExampleId] = useState<string | null>(null);

  const lesson = lessons.find((l) => l.id === lessonId)!;
  const example = lesson.examples.find((e) => e.id === exampleId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 32, paddingHorizontal: 20 }}>
        <View style={{ width: '100%', maxWidth: 720 }}>
          {/* Header */}
          <Text className="text-xs font-bold uppercase text-emerald-700" style={{ letterSpacing: 2 }}>
            HybridApp
          </Text>
          <Text className="text-4xl font-bold text-slate-900" style={{ marginTop: 6 }}>
            Lessons
          </Text>
          <Text className="text-base text-slate-500" style={{ marginTop: 6 }}>
            Pick a lesson, then open one example at a time.
          </Text>

          {/* Lesson filter */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
            {lessons.map((l) => {
              const active = l.id === lessonId;
              return (
                <Pressable
                  key={l.id}
                  accessibilityRole="button"
                  onPress={() => {
                    setLessonId(l.id);
                    setExampleId(null);
                  }}
                  style={{
                    backgroundColor: active ? '#047857' : '#e2e8f0',
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    borderRadius: 999,
                  }}>
                  <Text style={{ color: active ? '#fff' : '#334155', fontWeight: '600' }}>Lesson {l.id}</Text>
                </Pressable>
              );
            })}
            {upcomingLessons.map((n) => (
              <View
                key={n}
                style={{
                  backgroundColor: '#f1f5f9',
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  borderRadius: 999,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#cbd5e1',
                }}>
                <Text style={{ color: '#94a3b8', fontWeight: '600' }}>Lesson {n} · soon</Text>
              </View>
            ))}
          </View>

          <View style={{ height: 1, backgroundColor: '#e2e8f0', marginVertical: 24 }} />

          {example ? (
            <View>
              <Pressable accessibilityRole="button" onPress={() => setExampleId(null)} style={{ marginBottom: 16 }}>
                <Text className="font-semibold text-emerald-700">‹ Back to Lesson {lesson.id}</Text>
              </Pressable>
              <Text className="text-2xl font-bold text-slate-900">{example.title}</Text>
              <Text className="text-base text-slate-500" style={{ marginTop: 4, marginBottom: 20 }}>
                {example.description}
              </Text>
              <example.Component />
            </View>
          ) : (
            <View>
              <Text className="text-xl font-bold text-slate-900">{lesson.title}</Text>
              <Text className="text-slate-500" style={{ marginTop: 4, marginBottom: 16 }}>
                {lesson.examples.length} examples
              </Text>
              <View style={{ gap: 12 }}>
                {lesson.examples.map((e, i) => (
                  <Pressable
                    key={e.id}
                    accessibilityRole="button"
                    onPress={() => setExampleId(e.id)}
                    style={({ pressed }) => ({
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 16,
                      backgroundColor: pressed ? '#f1f5f9' : '#fff',
                      borderWidth: 1,
                      borderColor: '#e2e8f0',
                      borderRadius: 16,
                      padding: 16,
                    })}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        backgroundColor: '#d1fae5',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{ color: '#047857', fontWeight: '700', fontSize: 16 }}>{i + 1}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text className="text-base font-semibold text-slate-900">{e.title}</Text>
                      <Text className="text-sm text-slate-500" style={{ marginTop: 2 }}>
                        {e.description}
                      </Text>
                    </View>
                    <Text style={{ color: '#94a3b8', fontSize: 22 }}>›</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
